
module.exports = function(sequelize, DataTypes) {
 var difficulty = sequelize.define("difficulty", {
   googleId: DataTypes.STRING,
   difficulty: DataTypes.INTEGER
 });
 return difficulty;
};