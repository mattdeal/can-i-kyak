
module.exports = function(sequelize, DataTypes) {
 var Difficulty = sequelize.define("Difficulty", {
   googleId: DataTypes.STRING,
   difficulty: DataTypes.INTEGER
 });
 return Difficulty;
};