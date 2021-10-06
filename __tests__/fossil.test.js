import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post fossils to table', () => {
    return request(app)
      .post('/api/v1/fossils')
      .send({
        name: 'amber',
        resource: 'fossils'
      })
      .then((res) => {
        console.log('help', res.body);
        expect(res.body).toEqual(
          {
            id: expect.any(String),
            fossil: expect.any(String),
            price: expect.any(Number),
            museum: expect.any(String),
          }
        );
      });
  });

  afterAll(() => {
    pool.end();
  });
});
