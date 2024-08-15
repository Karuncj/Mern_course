import mongoose from 'mongoose';
import { users, courses } from './data';
import { UserModel } from '../models/User';
import { CourseModel } from '../models/Course';

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection open!');
  UserModel.insertMany(users, (error) => {
    if (error) {
      console.error(error);
    }
  });
  CourseModel.insertMany(courses, (error) => {
    if (error) {
      console.error(error);
    }
  });
});