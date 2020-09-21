import { Orders } from '#root/db/models';

const setUpRoutes = (app) => {
  app.get('/orders', async (req, res, next) => {
    try {
      const orders = await Orders.findAll();
      return res.json(orders);
    } catch (e) {
      console.error(e.message);
    }
  });
  app.get('/orders/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const ordersId = await Orders.findByPk(id);
      return res.json(ordersId);
    } catch (e) {
      console.error(e.message);
    }
  });
};

export default setUpRoutes;
