const test = require('node:test');
const assert = require('node:assert');
const app = require('./server');

// simple integration test for /api/check

test('GET /api/check responds with provided address', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/api/check?address=0xabc`);
  const data = await res.json();

  assert.strictEqual(data.address, '0xabc');
  assert.ok('ownerPercent' in data);

  server.close();
});
