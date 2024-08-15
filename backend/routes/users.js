import { UserModel } from '../models/User';

export default (app) => {
  /*
  *  this is the users API (v1)
  */
  // GET users
  app.get('/v1/users', async (req, res) => {
    const users = await UserModel.find() || []; // fallback to an empty array
    res.send(users);
  });

  // GET user by id
  app.get('/v1/users/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).end();
      }
    } catch (e) {
      res.status(404).end();
    }
  });

   // POST users
   app.post('/v1/users', async (req, res) => {
    const user = await UserModel.create(req.body);
    if (user) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  // PUT users by id
  app.put('/v1/users/:id', async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  // DELETE users by id
  app.delete('/v1/users/:id', async (req, res) => {
    const user = await UserModel.findByIdAndDelete(
      req.params.id,
      req.body,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
}