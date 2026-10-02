import test from 'node:test';
import assert from 'node:assert/strict';
import { handleEvidence } from './evidence.mjs';

const endpoint = 'http://localhost:4173/api/evidence';
function request(question, origin = 'http://localhost:4173') {
  return new Request(endpoint, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify({ question }) });
}
function modelResponse(result) {
  return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(result) }] } }] }), { status: 200 });
}

test('returns a cited answer only when the model cites a retrieved passage', async () => {
  const fetcher = async (_url, options) => {
    const prompt = JSON.parse(options.body).contents[0].parts[0].text;
    const id = prompt.match(/ID: ([^\n]+)/)?.[1];
    assert.ok(id);
    return modelResponse({ answer: 'The framework has four core functions.', citation_ids: [id], grounded: true });
  };
  const result = await handleEvidence(request('What are the four functions of the AI RMF core?'), { env: { GEMINI_API_KEY: 'test' }, fetcher });
  assert.equal(result.status, 200);
  const data = await result.json();
  assert.equal(data.status, 'answer');
  assert.equal(data.sources.length, 1);
  assert.match(data.sources[0].url, /^https:\/\/nvlpubs\.nist\.gov\//);
  assert.ok(data.sources[0].page > 0);
});

test('abstains on unrelated questions without calling the model', async () => {
  const result = await handleEvidence(request('What is the weather in Berlin today?'), { fetcher: () => { throw new Error('must not call model'); } });
  assert.equal((await result.json()).status, 'no_evidence');
});

test('rejects fabricated citations and permits explicit model abstention', async () => {
  const invented = await handleEvidence(request('What is prompt injection?'), { env: { GEMINI_API_KEY: 'test' }, fetcher: async () => modelResponse({ answer: 'Unsupported answer.', citation_ids: ['fake-passage'], grounded: true }) });
  assert.equal(invented.status, 502);
  const abstained = await handleEvidence(request('What is prompt injection?'), { env: { GEMINI_API_KEY: 'test' }, fetcher: async () => modelResponse({ answer: 'Insufficient context.', citation_ids: [], grounded: false }) });
  assert.equal((await abstained.json()).status, 'no_evidence');
});

test('bounds input and browser origins', async () => {
  assert.equal((await handleEvidence(request('x'.repeat(501)))).status, 400);
  assert.equal((await handleEvidence(request('What is prompt injection?', 'https://example.com'))).status, 403);
});
