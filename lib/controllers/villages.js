import { Router } from 'express';
import  VillagerServ from '../services/VillagerServ.js';


export default Router()
  .post('/', async (req, res, next) => {
    try {
      console.log('SAVE', req.body);
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
  })

  .get('/:id', async (req, res, next) => {
    try {
      const getVillager = await VillagerServ.getAVillager();
      res.json(getVillager);
    } catch(err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const patchVillager = await VillagerServ.updateAVillager(req.body);
      res.json(patchVillager);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteVillager = await VillagerServ.deleteAVillager(req.params.id);
      res.send(deleteVillager);
    } catch(err) {
      next(err);
    }
  });
