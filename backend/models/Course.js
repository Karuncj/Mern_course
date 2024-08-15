import mongoose, { Schema } from 'mongoose';

export const CourseSchema = new Schema({
  name: String,
  types: [String],
  images: [String],
  price: Number,
});

export const CourseModel = mongoose.model('Course', CourseSchema);