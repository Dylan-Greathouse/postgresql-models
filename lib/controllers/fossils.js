import { Router } from 'express';
import { FossilServ } from '../services/fossilServ.js';


export default Router()
  .post('/', async (req, res, next) => {
    try {
      const saveFossil = await FossilServ.saveSomeFossils(req.body);
      res.json(saveFossil);
    } catch (err) {
      next(err);
    }
  });
  
