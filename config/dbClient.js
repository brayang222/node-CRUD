import { MongoClient } from "mongodb";
import mongoose, { mongo } from "mongoose";

class dbClient {
  constructor(){
    this.connectDB();
  }

  async connectDB() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
    console.log("conectado a la base de datos")
  }

  async closeConnection(){
    try {
      await mongoose.disconnect();
      console.log("Conexion cerrada")
    } catch (error) {
      console.error("Error al cerrar conexion", error)  
    }
  }
}

export default new dbClient();