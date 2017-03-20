module.exports = function(sequelize, DataTypes) {
 var comment = sequelize.define("comment", {
   googleId: DataTypes.STRING,
   comment: DataTypes.STRING
 });
 return comment;
};