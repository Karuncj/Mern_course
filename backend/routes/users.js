import {userModels} from '../models/User.js';

export default(app) => {
app.get('/v1/users', async (req, res) => {
    const users = await userModels.find();
    res.send(users);
});


 app.get('/v1/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModels.findById(id);
      if (user) {
        console.log(user);
        res.send(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });


 // Create a new user
 app.post('/v1/users', async (req, res) => {
    try {
        console.log(req.body);
      const user = await userModels.create(req.body);
      res.status(201).send(user);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

app.put('/v1/users/:id',async(req,res)=>{
  try{  
    const user=await userModels.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if (!user) {
      return res.status(404).send('User not found');
    }
    console.log(user);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/v1/users/:id',(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const city=req.body.city;
    const msg='delete:data =>'+' '+ id+ ' '+ name+' '+city+ ' ';
    console.log(msg);
    res.status(200).end();
})

app.delete("/v1/users",async(req,res)=>
{
    try{
    const user=req.body.user;
    const city=req.body.city;
    if(!user && !city){
        const users = await userModels.deleteMany({ user: { $exists: false }, city: { $exists: false } });
        console.log(users);
        res.status(200).end();
    }
}
    catch(err){
        console.log(err);
        res.status(500).end();
}
});
}