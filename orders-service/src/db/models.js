import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Orders extends Model {}

Orders.init(
  {
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    cart_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    total_amount: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
  },
  {
    modelName: 'orders',
    sequelize,
  }
);
