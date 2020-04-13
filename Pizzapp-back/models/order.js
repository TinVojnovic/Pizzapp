'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    itemIds: {
      type: DataTypes.STRING,

      get: function () {
        return JSON.parse(this.getDataValue('itemIds'));
      },
      set: function (val) {
        return this.setDataValue('itemIds', JSON.stringify(val));
      }
    },
    sizes: {
      type: DataTypes.STRING,

      get: function () {
        return JSON.parse(this.getDataValue('sizes'));
      },
      set: function (val) {
        return this.setDataValue('sizes', JSON.stringify(val));
      }
    },
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    userId: DataTypes.STRING,
    sideNote: DataTypes.TEXT
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};