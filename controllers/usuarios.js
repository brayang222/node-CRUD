import { generateToken } from '../helpers/autenticacion.js';
import usuariosModelo from '../models/usuarios.js';
import bcrypt from 'bcrypt';

class usuariosController {
  constructor() {
  }

  async register(req, res) {
    try {
      const { nombre, email, telefono, clave } = req.body;

      const usuarioExiste = await usuariosModelo.getOneByEmail({email});
      if (usuarioExiste) return res.status(400).json({error: 'El usuario ya existe'});

      const claveEncriptada = await bcrypt.hash(clave, 10);

      const data = await usuariosModelo.create({email, nombre, telefono, clave: claveEncriptada});
      res.status(201).json(data)
    } catch (error) {
      console.log(error);
    }
  }

  async login(req, res) {
    const {email, clave} = req.body;
    const usuarioExiste = await usuariosModelo.getOneByEmail({email});
    if(!usuarioExiste) return res.status(400).json({error: 'El usuario no existe'});

    const claveValida = await bcrypt.compare(clave, usuarioExiste.clave);
    if(!claveValida) return res.status(400).json({error: 'La calve no es valida'})

    const token = generateToken(email);
    
    return res.status(200).json({message: 'Bienvenido usuario', token});
  }

   async profile(req, res) {
      try {
        const data = await usuariosModelo.getOneByEmail({email: req.emailConectado});
        res.status(201).json(data)
      } catch (error) {
        res.status(500).send(error)
      }
    }
}

export default new usuariosController();