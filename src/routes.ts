import { Router } from 'express';
import { UserController } from './controller/UserController';

const routes: Router = Router();

routes.get('/users', UserController.instance.listaAll);

export default routes;