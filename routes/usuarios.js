import express from 'express';
const route = express.Router();
import usuariosController from '../controllers/usuarios.js';

route.post('/register', usuariosController.register);
route.post('/login', usuariosController.login);

export default route;