module.exports = function(sequelize, DataTypes) {
 var comment = sequelize.define("comment", {
   google_Id: DataTypes.STRING,
   comment: DataTypes.STRING
 });
 return comment;
};