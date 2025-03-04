import mongoose from "mongoose";

const mascotasSchema = new mongoose.Schema(
  {
    nombre: {type: String, required: true},
    tipo: {type: String, required: true, enum: ['perro', 'gato', 'conejo', 'pez', 'otro']},
    raza: {type: String},
    edad: {type: Number, min: [0, 'La edad no puede ser menor a 0']},
    descripcion: {type: String},
    imagen: {type: String},
    adoptado: {type: Boolean, default: false}
  }, {timestamps: true}
)

export default mongoose.model('Mascotas', mascotasSchema);