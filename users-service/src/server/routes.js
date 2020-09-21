import { Users } from '#root/db/models';

const setUpRoutes = (app) => {
  app.get('/users', async (req, res, next) => {
    try {
      const users = await Users.findAll();
      return res.json(users);
    } catch (e) {
      console.error(e.message);
    }
  });
  app.get('/users/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const userId = await Users.findByPk(id);
      // console.log(userId);
      return res.json(userId);
    } catch (error) {
      console.error(error);
    }
  });
};

export default setUpRoutes;
