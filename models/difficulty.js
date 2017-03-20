
module.exports = function(sequelize, DataTypes) {
 var difficulty = sequelize.define("difficulty", {
   google_id: DataTypes.STRING,
   difficulty: DataTypes.INTEGER
 });
 return difficulty;
};