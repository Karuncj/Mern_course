import { CourseModel } from '../models/Course';

export default (app) => {
  /*
  *  this is the courses API (v1)
  */
  // GET courses
  app.get('/v1/courses', async (req, res) => {
    const courses = await CourseModel.find() || []; // fallback to an empty array
    res.send(courses);
  });

  // GET course by id
  app.get('/v1/courses/:id', async (req, res) => {
    try {
      const course = await CourseModel.findById(req.params.id);
      if (course) {
        res.send(course);
      } else {
        res.status(404).end();
      }
    } catch (e) {
      res.status(404).end();
    }
  });

  // POST courses
  app.post('/v1/courses', async (req, res) => {
    const course = await CourseModel.create(req.body);
    if (course) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  // PUT courses by id
  app.put('/v1/courses/:id', async (req, res) => {
    const course = await CourseModel.findByIdAndUpdate(
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

  // DELETE courses by id
  app.delete('/v1/courses/:id', async (req, res) => {
    const course = await CourseModel.findByIdAndDelete(
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