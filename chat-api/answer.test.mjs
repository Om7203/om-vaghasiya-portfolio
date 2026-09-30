import test from 'node:test';
import assert from 'node:assert/strict';
import { handleChat } from './answer.mjs';

const origin = 'https://om7203.github.io';
const request = (body, extraHeaders = {}) => new Request('https://chat.example/api/chat', { method: 'POST', headers: { origin, 'content-type': 'application/json', ...extraHeaders }, body: JSON.stringify(body) });
const modelResponse = (result) => new Response(JSON.stringify({ output: [{ type: 'message', content: [{ type: 'output_text', text: JSON.stringify(result) }] }] }), { status: 200 });

test('answers using server-side key and returns only approved source links', async () => {
  let sent;
  const response = await handleChat(request({ message: 'Tell me about Evidence Desk', language: 'en' }), {
    env: { OPENAI_API_KEY: 'test-secret' },
    fetcher: async (_url, options) => { sent = options; return modelResponse({ answer: 'Evidence Desk is a cited search experiment.', source_ids: ['evidence', 'made_up', 'evidence'], grounded: true }); }
  });
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.sources.length, 1);
  assert.equal(body.sources[0].id, 'evidence');
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.equal(sent.headers.authorization, 'Bearer test-secret');
  const payload = JSON.parse(sent.body);
  assert.equal(payload.store, false);
  assert.equal(payload.input.at(-1).content, 'Tell me about Evidence Desk');
});

test('rejects unsupported citations and oversized input', async () => {
  const noCitation = await handleChat(request({ message: 'What has he built?' }), { env: { OPENAI_API_KEY: 'test' }, fetcher: async () => modelResponse({ answer: 'An unsupported claim', source_ids: ['fake'], grounded: true }) });
  assert.equal(noCitation.status, 502);
  const tooLong = await handleChat(request({ message: 'a'.repeat(601) }), { env: { OPENAI_API_KEY: 'test' } });
  assert.equal(tooLong.status, 400);
});

test('does not accept other website origins or call the model without a key', async () => {
  const other = await handleChat(request({ message: 'Hello' }, { origin: 'https://example.com' }), { env: { OPENAI_API_KEY: 'test' } });
  assert.equal(other.status, 403);
  const noKey = await handleChat(request({ message: 'Hello' }), { env: {} });
  assert.equal(noKey.status, 503);
});
