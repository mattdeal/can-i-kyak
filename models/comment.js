module.exports = function(sequelize, DataTypes) {
 var comment = sequelize.define("comment", {
   id: DataTypes.STRING,
   googleId: DataTypes.STRING,
   comment: DataTypes.comment
 });
 return comment;
};