import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionController();

// body, params, query

routes.get('/classes', classesControllers.index); 
routes.post('/classes', classesControllers.create); 

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;