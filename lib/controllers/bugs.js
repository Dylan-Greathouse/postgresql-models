import { Router } from 'express';
import { BugServ } from '../services/BugServ';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveBug = await BugServ.saveSomeBugs(req.body);
      res.json(saveBug);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const getBugs = await BugServ.getSomeBugs();
      res.json(getBugs);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const getBug = await BugServ.getABug();
      res.json(getBug);
    } catch(err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const patchBug = await BugServ.updateABug(req.body);
      res.json(patchBug);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteBug = await BugServ.deleteABug(req.params.id);
      res.send(deleteBug);
    } catch(err) {
      next(err);
    }
  });



