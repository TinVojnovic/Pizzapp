'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    prices: {
      type: DataTypes.INTEGER,
      get: function () {
        return JSON.parse(this.getDataValue('prices'));
      },
      set: function (val) {
        return this.setDataValue('prices', JSON.stringify(val));
      }
    }
  }, {
    tableName: "Menu"
  });
  MenuItem.associate = function (models) {
    // associations can be defined here
  };
  return MenuItem;
};