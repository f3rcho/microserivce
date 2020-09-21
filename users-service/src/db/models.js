import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Users extends Model {}

Users.init(
  {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
  },
  {
    modelName: 'users',
    sequelize
  }
);
