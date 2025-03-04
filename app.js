import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mascotas', routesMascotas);

try {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
} catch (error) {
  console.error(error);
}