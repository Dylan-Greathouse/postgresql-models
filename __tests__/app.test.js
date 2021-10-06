import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });

  it('post villagers to table', () => {
    return request(app)
      .post('/api/v1/villagers')
      .send({
        id: 1,
        resource: 'villagers'
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          villager: expect.any(String),
          personality: expect.any(String),
          saying: expect.any(String),
          hobby: expect.any(String),
        });
      });
  });

  it('get villagers from table villagers', () => {
    request(app)
      .post('/api/v1/villagers')
      .send();
    return request(app)
      .get('/api/v1/villagers')
      .then((res) => {
     
        expect(res.body).toEqual(expect.any(Array));

      });
  });

  it('get a villager from table villagers', () => {
    request(app)
      .post('/api/v1/villagers')
      .send({
        id: 1,
        resource: 'villagers'
      });
    return request(app)
      .get('/api/v1/villagers/1')
      .then((res) => {
     
        expect(res.body).toEqual({
          id: expect.any(String),
          villager: expect.any(String),
          personality: expect.any(String),
          saying: expect.any(String),
          hobby: expect.any(String),
        });

      });
  });

  it('update a villager from table villagers', () => {
    request(app)
      .post('/api/v1/villagers')
      .send({
        id: 1,
        resource: 'villagers'
      });
    return request(app)
      .patch('/api/v1/villagers/1')
      .send({
        id: '1',
        villager: 'Cyrano',
        personality: 'Nice',
        saying: 'Don\'t punch your nose to spite your face.',    
        hobby: 'Education'
      })
      .then((res) => {
     
        expect(res.body).toEqual({
          id: expect.any(String),
          villager: expect.any(String),
          personality: expect.any(String),
          saying: expect.any(String),
          hobby: expect.any(String),
        });

      });
  });

  it('delete a villager from table villagers', async() => {
    const res = await request(app)
      .delete('/api/v1/villagers/1');
    expect(res.body).toEqual({});
  });



  afterAll(() => {
    pool.end();
  });
});
