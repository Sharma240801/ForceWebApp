import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
  '.ts': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url?.split('?')[0] || '/');
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  const filePath = path.normalize(path.join(ROOT, reqPath));

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>404 Not Found</h1>
          <p>The requested URL <code>${reqPath}</code> was not found.</p>
          <p><a href="/index.html">Go to Dashboard</a> | <a href="/car-detail.html">Go to Car Detail</a></p>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('\n======================================================');
  console.log(`🚗 MORENT Car Rental Assignment Server`);
  console.log(`📡 Local Server:   http://localhost:${PORT}`);
  console.log('------------------------------------------------------');
  console.log(`👉 Screen 1 (Dashboard Admin):   http://localhost:${PORT}/index.html`);
  console.log(`👉 Screen 2 (Car Detail/Catalog): http://localhost:${PORT}/car-detail.html`);
  console.log('======================================================\n');
});

