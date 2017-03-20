
module.exports = function(sequelize, DataTypes) {
 var difficulty = sequelize.define("rental", {
   id: DataTypes.STRING,
   googleId: DataTypes.STRING,
   rental: DataTypes.BOOLEAN
 });
 return rental;
};