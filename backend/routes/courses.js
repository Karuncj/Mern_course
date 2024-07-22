import {courseModels} from '../models/Course.js';

export default(app) => {
app.get('/v1/course', async (req, res) => {
    const users = await courseModels.find();
    res.send(course);
});
}