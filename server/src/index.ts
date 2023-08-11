import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/vars';
import router from './routes';
import createTableModels from './models';

const app = express();

/* ------ SERVER CONFIG ------- */
app.use(morgan('dev'));
//middlewares
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
// Routes
app.use('/api', router);

app.listen(PORT, () => {
  console.log('server iniciado PORT || ', PORT);
});

/* ------ DATABASE ------- */
createTableModels();
