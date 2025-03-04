import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import routesUsuarios from './routes/usuarios.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/pets', routesMascotas);
app.use('/users', routesUsuarios);

try {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
} catch (error) {
  console.error(error);
}

process.on('SIGINT', async () => {
  await dbClient.closeConnection();
  process.exit(0);
});