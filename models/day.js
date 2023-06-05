'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate(models) {
      Day.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Day.init({
    day: DataTypes.DATE,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    photo: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};