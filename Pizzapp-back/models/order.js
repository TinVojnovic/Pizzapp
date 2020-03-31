'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    items: {
      type: DataTypes.STRING,

      get: function () {
        return JSON.parse(this.getDataValue('items'));
      },
      set: function (val) {
        return this.setDataValue('items', JSON.stringify(val));
      }
    },
    userId: DataTypes.STRING,
    sideNote: DataTypes.TEXT
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};