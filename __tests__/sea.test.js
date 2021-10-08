import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post seas to table', async () => {
    const res = await request(app)
      .post('/api/v1/sea')
      .send({
        name: 'seaweed',
        resource: 'sea',
      });
    expect(res.body).toEqual({
      id: expect.any(String),
      sea: expect.any(String),
      price: expect.any(Number),
      museum: expect.any(String),
    });
  });

  it('get seas from table seas', async () => {
    await request(app).post('/api/v1/sea').send();
    return request(app)
      .get('/api/v1/sea')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it('get a sea from table seas', async () => {
    await request(app).post('/api/v1/sea').send({
      name: 'seaweed',
      resource: 'sea',
    });
    return request(app)
      .get('/api/v1/sea/1')
      .then((res) => {
        expect(res.body).toEqual(
          {
            id: expect.any(String),
            sea: expect.any(String),
            price: expect.any(Number),
            museum: expect.any(String),
          }
        );
      });
  });

  it('update a sea from table seas', async () => {
    await request(app).post('/api/v1/sea').send({
      name: 'seaweed',
      resource: 'sea',
    });
    return request(app)
      .patch('/api/v1/sea/1')
      .send({
        id: '1',
        sea: 'seaweed',
        price: 1400,
        museum:
          'Let it be known that seaweed is a misnomer of the highest order! That is, it is not a noxious weed so much as it is a marine algae most beneficial to life on land and sea. Seaweed, you see, provides essential habitat and food for all manner of marine creatures. And it creates a great deal of the oxygen we land lovers love to breath too, hoo! And yet, I can\'t help but shudder when the slimy stuff touches my toes during a swim. Hoot! The horror!',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          sea: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('delete a sea from table seas', async () => {
    const res = await request(app).delete('/api/v1/sea/1');
    expect(res.body).toEqual({});
  });

  afterAll(() => {
    pool.end();
  });
});
