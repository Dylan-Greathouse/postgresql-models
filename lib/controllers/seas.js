import { Router } from 'express';
import  SeaServ  from '../services/SeaServ.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveSea = await SeaServ.saveSomeSeas(req.body);
      res.json(saveSea);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getSeas = await SeaServ.getSomeSeas();
      res.json(getSeas);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const getSea = await SeaServ.getASea();
      res.json(getSea);
    } catch(err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const patchSea = await SeaServ.updateASea(req.body);
      res.json(patchSea);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteSea = await SeaServ.deleteASea(req.params.id);
      res.send(deleteSea);
    } catch(err) {
      next(err);
    }
  });
