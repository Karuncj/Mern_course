import mongoose from "mongoose";
import { users, courses } from './data.js';
import { userModels } from "../models/User.js";
import { courseModels } from "../models/Course.js";

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('connection error:', error);
});

db.once('open', async () => {
    console.log('db connected');
    
    try {
        // Use async/await with insertMany
        const userDocs = await userModels.insertMany(users);
        console.log('users insertMany success:', userDocs);
        
        const courseDocs = await courseModels.insertMany(courses);
        console.log('courses insertMany success:', courseDocs);
    } catch (error) {
        console.error('InsertMany error:', error);
    }
    
    db.close(); // Close the connection
});
