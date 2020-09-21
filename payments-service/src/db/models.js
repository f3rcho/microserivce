import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Payments extends Model {}

Payments.init(
  {
    order_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      kind: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      method: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      external_reference_id: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
  },
  {
    modelName: 'payments',
    sequelize
  }
);
