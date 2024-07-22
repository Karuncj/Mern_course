import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.set('useFindAndModify',false);

const db=mongoose.connection;
db.on('error', error => {
    console.error('db connection error:', error); // Log errors here
  });
  
  db.once('open', () => {
    console.log('db connected'); // Log successful connection here
  });
  
  export default db;