import { Router } from 'express';
import { VillagerServ } from '../services/VillagerServ.js';




export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveVillager = await VillagerServ.saveSomeVillagers(req.body);
      res.json(saveVillager);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getVillagers = await VillagerServ.getSomeVillagers();
      res.json(getVillagers);
    } catch(err) {
      next(err);
    }
  });
