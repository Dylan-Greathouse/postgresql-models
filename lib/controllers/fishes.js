import { Router } from 'express';
import { FishServ } from '../services/FishServ';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveFish = await FishServ.saveSomeFishes(req.body);
      res.json(saveFish);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getFishes = await FishServ.getSomeFishes();
      res.json(getFishes);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const getFish = await FishServ.getAFish();
      res.json(getFish);
    } catch(err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const patchFish = await FishServ.updateAFish(req.body);
      res.json(patchFish);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteFish = await FishServ.deleteAFish(req.params.id);
      res.send(deleteFish);
    } catch(err) {
      next(err);
    }
  });
