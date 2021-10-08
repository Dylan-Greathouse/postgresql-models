import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post bugs to table', async () => {
    const res = await request(app)
      .post('/api/v1/bugs')
      .send({
        name: 'mantis',
        resource: 'bugs',
      });
    expect(res.body).toEqual({
      id: expect.any(String),
      bug: expect.any(String),
      price: expect.any(Number),
      museum: expect.any(String),
    });
  });

  it('get bugs from table bugs', async () => {
    await request(app).post('/api/v1/bugs').send();
    const res = await request(app)
      .get('/api/v1/bugs');
    expect(res.body).toEqual(expect.any(Array));
  });

  it('get a bug from table bugs', async () => {
    await request(app).post('/api/v1/bugs').send({
      name: 'mantis',
      resource: 'bugs',
    });
    const res = await request(app)
      .get('/api/v1/bugs/1');
    expect(res.body).toEqual({
      id: expect.any(String),
      bug: expect.any(String),
      price: expect.any(Number),
      museum: expect.any(String),
    });
  });

  it('update a bug from table bugs', async () => {
    await request(app).post('/api/v1/bugs').send({
      name: 'mantis',
      resource: 'bugs',
    });
    return request(app)
      .patch('/api/v1/bugs/1')
      .send({
        id: '1',
        bug: 'mantis',
        price: 1400,
        museum: 'Hoo! Don\'t let the mantis\'s angelic pose fool you...for it is truly monstrous. The mantis is known for its large size and tremendous strength...and for sickle-like arms that pack a punch. And though they tend to eat bugs and spiders...mantises have been known to dine on small animals too! And those eerie eyes! Oh my! Did you know it has five of them! Two big ones and three small! I shall faint if I think on it further...'
      
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          bug: expect.any(String),
          price: expect.any(Number),
          museum: expect.any(String),
        });
      });
  });

  it('delete a bug from table bugs', async () => {
    const res = await request(app).delete('/api/v1/villagers/1');
    expect(res.body).toEqual({});
  });


  afterAll(() => {
    pool.end();
  });
});
