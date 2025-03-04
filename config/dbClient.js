import { MongoClient } from "mongodb";

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=ClusterAdopcion`;
    this.client = new MongoClient(queryString);
    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db('adopcion'); 
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  }

}

export default new dbClient();