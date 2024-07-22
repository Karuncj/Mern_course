import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const user=new Schema({
    user: {type: String, required: false},
    city: {type: String, required: false}
});
export const userModels=mongoose.model('user',user);    