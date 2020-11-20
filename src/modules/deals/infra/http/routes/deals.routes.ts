import 'reflect-metadata';

import { Router } from 'express';

import DealsController from '../controllers/DealsController';

const dealsRouter = Router();

const dealsController = new DealsController();

dealsRouter.get('/', dealsController.index);
dealsRouter.get('/find', dealsController.findClient);

export default dealsRouter;
