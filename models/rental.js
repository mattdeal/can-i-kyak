
module.exports = function(sequelize, DataTypes) {
 var rental = sequelize.define("rental", {
   google_id: DataTypes.STRING,
   rental: DataTypes.BOOLEAN
 });
 return rental;
};