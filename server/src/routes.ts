import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesCrontollers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesCrontollers.index);
routes.post('/classes', classesCrontollers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;