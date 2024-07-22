import mongoose from "mongoose";
import { Schema } from "mongoose";

const course=new Schema({
    name:{type:"String",required:true},
    weight:{type:"Number",required:true},
    image:{type:"String",required:true},
})
export const courseModels=mongoose.model("course",course)