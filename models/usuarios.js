import Usuario from "../schemas/usuarios.js";
import mongoose from "mongoose";

class usuariosModelo {
  async create(usuario){
    return await Usuario.create(usuario);
  }

  async update(id, usuario){
    return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, usuario, {new: true});
  }

  async delete(id){
    return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id)});
  }

  async getAll() {
    return await Usuario.find();
  }

  async getOneById(id){
    return await Usuario.findById(id);
  }

  async getOneByEmail(email){
    return await Usuario.findOne(email);
  }
}

export default new usuariosModelo();