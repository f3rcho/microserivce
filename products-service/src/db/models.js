import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Products extends Model {}

Products.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sku: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'products',
    sequelize
  }
);
