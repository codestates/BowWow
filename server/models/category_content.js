'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category_content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.category_content.belongsTo(models.post,{foreignKey: "posts_id", sourceKey: 'id'})
      models.category_content.belongsTo(models.category,{foreignKey: "category_id", sourceKey: 'id'})
    }
  };
  category_content.init({}, {
    sequelize,
    modelName: 'category_content',
  });
  return category_content;
};