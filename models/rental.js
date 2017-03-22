
module.exports = function(sequelize, DataTypes) {
 var Rental = sequelize.define("Rental", {
   googleId: DataTypes.STRING,
   rental: DataTypes.BOOLEAN
 });
 return Rental;
};