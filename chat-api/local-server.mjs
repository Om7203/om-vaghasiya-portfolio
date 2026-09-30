import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleChat } from './answer.mjs';

const docs = normalize(fileURLToPath(new URL('../docs/', import.meta.url))).replace(/[\\/]+$/, '');
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png' };
createServer(async (req, res) => {
  if (req.url === '/api/chat') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const request = new Request('http://localhost:4173/api/chat', { method: req.method, headers: req.headers, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks) });
    const response = await handleChat(request);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
    return;
  }
  const route = decodeURIComponent((req.url || '/').split('?')[0]);
  const path = normalize(join(docs, route === '/' ? 'index.html' : route.replace(/^\/+/, '')));
  if (!path.startsWith(docs + sep) && path !== docs) { res.writeHead(403); res.end(); return; }
  try {
    const filePath = extname(path) ? path : join(path, 'index.html');
    const file = await readFile(filePath);
    res.writeHead(200, { 'content-type': `${mime[extname(filePath)] || 'application/octet-stream'}; charset=utf-8` });
    res.end(file);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4173, () => console.log('Portfolio preview: http://localhost:4173/ask/'));
