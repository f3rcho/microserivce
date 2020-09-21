import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Carts extends Model {}
Carts.init(
  {
    user_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    order_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
  },
  {
    modelName: 'carts',
    sequelize,
  }
);

Carts.associate = (models) => {
  Carts.hasMany(models.Cart_items)
}

export class Cart_items extends Model {}
Cart_items.init(
  {
    cart_id: {
      allowNull: false,
      references: {
        key: 'id',
        model: 'carts',
      },
      type: DataTypes.UUID,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'cart_items',
    sequelize,
  }
);
Cart_items.associate = (models) => {
  Cart_items.belongsTo(models.Carts, {foreignKey: 'cartsId'})
}