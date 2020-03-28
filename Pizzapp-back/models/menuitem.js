'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    tableName: "Menu"
  });
  MenuItem.associate = function(models) {
    // associations can be defined here
  };
  return MenuItem;
};