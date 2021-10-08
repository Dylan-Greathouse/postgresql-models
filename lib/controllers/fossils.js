import { Router } from 'express';
import FossilServ  from '../services/FossilServ.js';


export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveFossil = await FossilServ.saveSomeFossils(req.body);
      res.json(saveFossil);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getFossils = await FossilServ.getSomeFossils();
      res.json(getFossils);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const getFossil = await FossilServ.getAFossil();
      res.json(getFossil);
    } catch(err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const patchFossil = await FossilServ.updateAFossil(req.body);
      res.json(patchFossil);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteFossil = await FossilServ.deleteAFossil(req.params.id);
      res.send(deleteFossil);
    } catch(err) {
      next(err);
    }
  });
