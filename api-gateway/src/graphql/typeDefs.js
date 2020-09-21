import { gql } from 'apollo-server';

const typeDefs = gql`
  type Products {
    description: String!
    id: ID!
    name: String!
  }
  type Payments {
    id: ID!
    order_id: Orders
    kind: String!
    method: String!
    external_reference_id: String!
  }
  type Orders {
    id: ID!
    user_id: Users
    cart_id: Carts
    total_amount: Int!
  }

  type Carts  {
    id: ID!
    user_id: Users
    order_id: Orders
    cartItems: [Cart_items]
  }
  type Cart_items {
    id: ID!
    cart_id: Carts
    product_id: Products
    quantity: Int!
  }
  type Users {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    getAllProducts: [Products!]!
    getProducts(id: ID!): Products

    getAllPayments: [Payments!]!
    getPayments(id: ID!): Payments
    
    getAllOrders: [Orders!]!
    getOrders(id: ID!):Orders
    
    getAllCarts: [Carts]
    getCart(id: ID!): Carts
    
    getAllCartsItems: [Cart_items]
    getCartItem(id: ID!): Cart_items
    
    getAllUsers: [Users]
    getUser(id: ID!): Users

    getProductsByUser(id:ID): Carts
  }
`;

export default typeDefs;
