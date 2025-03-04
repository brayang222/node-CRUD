import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
  {
    nombre: {type: String, required: true},
    email: {type: String, required: true, unique: true, trim: true},
    telefono: {type: String},
    clave: {type: String, required: true},
    imagen: {type: String}
  }, {timestamps: true}
)

export default mongoose.model('Usuarios', usuariosSchema);