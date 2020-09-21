import { Carts } from '#root/db/models';
import { Cart_items } from '../db/models';

const setUpRoutes = (app) => {
  app.get('/carts', async (req, res, next) => {
    try {
      const carts = await Carts.findAll();
      return res.json(carts);
    } catch (e) {
      console.error(e.message);
    }
  });
  app.get('/carts/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const cart = await Carts.findByPk(id)
      return res.json(cart)
    } catch (error) {
      console.error(error);
    }
  })
  app.get('/cart-items', async (req, res, next) => {
    try {
      const cartItems = await Cart_items.findAll();
      return res.json(cartItems);
    } catch (error) {
      console.error(error.message);
    }
  })
  app.get('/cart-items/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const cartItem = await Cart_items.findByPk(id);
      return res.json(cartItem)
    } catch (error) {
      console.error(error);
    }
  })
};

export default setUpRoutes;
