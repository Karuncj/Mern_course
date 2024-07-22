import express from 'express';
import bodyparser from 'body-parser';
import users from './mocks/users.js';
import db from './db/db.js';
import userRoutes from './routes/users.js';
import courseRoutes from './routes/courses.js';

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = 80;
courseRoutes(app);
userRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});