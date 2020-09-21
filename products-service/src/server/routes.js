import { Products } from '#root/db/models';

const setUpRoutes = (app) => {
  app.get('/products', async (req, res, next) => {
    try {
      const products = await Products.findAll();
      return res.json(products);
    } catch (e) {
      console.error(e.message);
    }
  });
  app.get('/products/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const products = await Products.findByPk(id);
      return res.json(products);
    } catch (e) {
      console.error(e.message);
    }
  });
};

export default setUpRoutes;
