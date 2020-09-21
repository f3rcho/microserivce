module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'cart_items',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
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

module.exports.down = (queryInterface) =>
  queryInterface.dropTable('cart_items');
