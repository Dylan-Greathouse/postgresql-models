import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post fossils to table', async () => {
    const res = await request(app)
      .post('/api/v1/fossils')
      .send({
        name: 'amber',
        resource: 'fossils',
      });
    expect(res.body).toEqual({
      id: expect.any(String),
      fossil: expect.any(String),
      price: expect.any(Number),
      museum: expect.any(String),
    });
  });

  it('get fossil from table fossils', async () => {
    await request(app).post('/api/v1/fossils').send();
    return request(app)
      .get('/api/v1/fossils')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it('get a fossil from table fossils', async () => {
    await request(app).post('/api/v1/fossils').send({
      name: 'amber',
      resource: 'fossils',
    });
    return request(app)
      .get('/api/v1/fossils/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          fossil: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('update a fossil from table fossils', async () => {
    await request(app).post('/api/v1/fossils').send({
      name: 'amber',
      resource: 'fossils',
    });
    return request(app)
      .patch('/api/v1/fossils/1')
      .send({
        id: '1',
        fossil: 'amber',
        price: 1400,
        museum: 'Amber is formed from the sap of ancient trees that hardened over time. Because of its beauty, it has often been traded and used as jewelry throughout history. However, individual specimens may contain ancient plants or insects trapped inside them! These are valuable resources for learning about ancient eras, such as when the dinosaurs roamed... And this is why they are sometimes displayed in certain...ahem... exceptional museums! Like mine.'
      
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          fossil: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('delete a fossil from table fossils', async () => {
    const res = await request(app).delete('/api/v1/villagers/1');
    expect(res.body).toEqual({});
  });

  afterAll(() => {
    pool.end();
  });
});
