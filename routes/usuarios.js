import express from 'express';
const route = express.Router();
import usuariosController from '../controllers/usuarios.js';
import { verificateToken } from '../helpers/autenticacion.js';

route.post('/register', usuariosController.register);
route.post('/login', usuariosController.login);
route.get('/profile', verificateToken, usuariosController.profile);

export default route;