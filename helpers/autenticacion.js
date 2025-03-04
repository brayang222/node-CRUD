import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';

export function generateToken(email){
  return jsonwebtoken.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
}

export function verificateToken(req, res, next){

  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log(token);
  if(!token) return res.status(401).json({error: 'Acceso denegado, token requerido'});

  try {
    const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.emailConectado = dataToken.email;
    next();
  } catch (error) {
    
    res.status(401).json({error: 'Token no valido'})
  }
}