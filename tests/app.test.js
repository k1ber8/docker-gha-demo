const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  test('Debe responder con mensaje correcto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hola desde Docker + GitHub Actions!');
  });
});
