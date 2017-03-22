module.exports = function(sequelize, DataTypes) {
 var Comment = sequelize.define("Comment", {
   googleId: DataTypes.STRING,
   comment: DataTypes.STRING
 });
 return Comment;
};