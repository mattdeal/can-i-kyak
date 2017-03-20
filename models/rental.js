
module.exports = function(sequelize, DataTypes) {
 var rental = sequelize.define("rental", {
   googleId: DataTypes.STRING,
   rental: DataTypes.BOOLEAN
 });
 return rental;
};