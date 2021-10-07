import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post fishes to table', () => {
    return request(app)
      .post('/api/v1/fish')
      .send({
        name: 'bitterling',
        resource: 'fish',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          fish: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('get fishes from table fishes', () => {
    request(app).post('/api/v1/fish').send();
    return request(app)
      .get('/api/v1/fish')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it('get a fish from table fishes', () => {
    request(app).post('/api/v1/fish').send({
      name: 'bitterlings',
      resource: 'fish',
    });
    return request(app)
      .get('/api/v1/fish')
      .then((res) => {
        expect(res.body).toEqual([{
          id: expect.any(String),
          fish: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        }]);
      });
  });

  it('update a fish from table fishes', () => {
    request(app).post('/api/v1/fish').send({
      name: 'bitterlings',
      resource: 'fish',
    });
    return request(app)
      .patch('/api/v1/fish/1')
      .send({
        id: '1',
        fish: 'bitterlings',
        price: 1400,
        museum: 'Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn\'t being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It\'s a wonderful bit of evolutionary deal making, don\'t you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?'
      
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          fish: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('delete a fish from table fishes', async () => {
    const res = await request(app).delete('/api/v1/fish/1');
    expect(res.body).toEqual({});
  });






  afterAll(() => {
    pool.end();
  });
});
