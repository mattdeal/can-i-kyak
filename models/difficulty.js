
module.exports = function(sequelize, DataTypes) {
 var difficulty = sequelize.define("difficulty", {
   id: DataTypes.STRING,
   googleId: DataTypes.STRING,
   difficulty: DataTypes.INTEGER
 });
 return difficulty;
};