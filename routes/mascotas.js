import express from 'express';
import mascotasController from '../controllers/mascotas.js';
import { verificateToken } from '../helpers/autenticacion.js';

const route = express.Router();

route.post('/', mascotasController.create);
route.get('/', mascotasController.getAll);
route.get('/:id', mascotasController.getOne);
route.put('/:id', verificateToken, mascotasController.update);
route.delete('/:id', verificateToken, mascotasController.delete);

export default route;