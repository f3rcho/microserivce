module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'orders',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      user_id: {
        allowNull: false,
        type: DataTypes.UUID
      },
      cart_id: {
        allowNull: false,
        type: DataTypes.UUID
      },
      total_amount: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("orders");
