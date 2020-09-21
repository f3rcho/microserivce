import got from 'got';

const USERS_SERVICE_URI = 'http://users-service:7104';
const CARTS_SERVICE_URI = 'http://carts-service:7101';
const PRODUCTS_SERVICE_URI = 'http://products-service:7100';
const PAYMENTS_SERVICE_URI = 'http://payments-service:7103';
const ORDERS_SERVICE_URI = 'http://orders-service:7102';

const resolvesOrder_id = async parent => {
    const id = parent.order_id;
    const response = await got.get(`${ORDERS_SERVICE_URI}/orders/${id}`)
    .json();
    return response;
}

const resolvesUser_id = async parent => {
    const id = parent.user_id;
    const response = await got.get(`${USERS_SERVICE_URI}/users/${id}`).json();
    return response;
}

const resolvesCart_id = async parent => {
    const id = parent.cart_id;
    const response = await got.get(`${CARTS_SERVICE_URI}/carts/${id}`).json();
    return response;
}

const resolvers = {
    Payments: {
        order_id: resolvesOrder_id
    },
    Cart_items: {
        product_id: async parent => {
            const id = parent.product_id;
            const response =await got.get(`${PRODUCTS_SERVICE_URI}/products/${id}`).json();
            return response;
        },
        cart_id: resolvesCart_id,
    },
    Carts: {
        user_id: resolvesUser_id,
        order_id: resolvesOrder_id
    },
    Orders: {
        user_id: resolvesUser_id,

        cart_id: resolvesCart_id,
    },
    Query: {
    getAllUsers: async () => {
      const body = await got.get(`${USERS_SERVICE_URI}/users`).json();
      return body;
    },
    getUser: async (_, { id }) => {
      const userId = await got.get(`${USERS_SERVICE_URI}/users/${id}`).json();
      return userId;
    },
    getAllProducts: async () => {
      const body = await got.get(`${PRODUCTS_SERVICE_URI}/products`).json();
      return body;
    },
    getProducts: async (_, { id }) => {
      const productId = await got
        .get(`${PRODUCTS_SERVICE_URI}/products/${id}`)
        .json();
      return productId;
    },
    getAllPayments: async () => {
      const body = await got.get(`${PAYMENTS_SERVICE_URI}/payments`).json();
      return body;
    },
    getPayments: async (_, { id }) => {
      const paymentsId = await got
        .get(`${PAYMENTS_SERVICE_URI}/payments/${id}`)
        .json();
      return paymentsId;
    },
    getAllOrders: async () => {
      const body = await got.get(`${ORDERS_SERVICE_URI}/orders`).json();
      return body;
    },
    getOrders: async (_, { id }) => {
      const ordersId = await got
        .get(`${ORDERS_SERVICE_URI}/orders/${id}`)
        .json();
      return ordersId;
    },
    getAllCarts: async () => {
      const body = await got.get(`${CARTS_SERVICE_URI}/carts`).json();
      return body;
    },
    getCart: async (_, { id }) => {
      const cartId = await got.get(`${CARTS_SERVICE_URI}/carts/${id}`).json();
      return cartId;
    },
    getAllCartsItems: async () => {
      const body = await got.get(`${CARTS_SERVICE_URI}/cart-items`).json();
      return body;
    },
    getCartItem: async (_, { id }) => {
      const cartItemsId = await got
        .get(`${CARTS_SERVICE_URI}/cart-items/${id}`)
        .json();
      return cartItemsId;
    },
    // getProductsByUser: async(_, { id }) => {
    //     const products = await got.get(`${PRODUCTS_SERVICE_URI}/products`).json();
    //     const user = await got.get(`${USERS_SERVICE_URI}/users/${id}`).json();
    //     const carts = await got.get(`${CARTS_SERVICE_URI}/carts`).json();
    //     const cartItems = await got.get(`${CARTS_SERVICE_URI}/cart-items`).json();
    //     const ordersId = await got.get(`${ORDERS_SERVICE_URI}/orders`).json();
    //     const payments = await got.get(`${PAYMENTS_SERVICE_URI}/payments`).json();

    //     if (cartItems.cart_id == carts.id) {
    //     const productId = cartItems.product_id;
    //     const userId = carts.user_id;
    //     console.log(productId);
    //     console.log(userId);
    //     }
    // }
  },
};

export default resolvers;
