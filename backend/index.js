import express from 'express';
import bodyParser from 'body-parser';
import courseRoutes from './routes/courses';
import userRoutes from './routes/users';
import cors from 'cors';
import db from './db/db';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80;
courseRoutes(app);
userRoutes(app);

app.listen(port, () =>
  console.log(`Express is listening on port ${port}!`)
);