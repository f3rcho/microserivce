module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'payments',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
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

module.exports.down = queryInterface => queryInterface.dropTable("payments");
