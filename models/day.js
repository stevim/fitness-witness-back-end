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
    dayDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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
      allowNull: false,
    },
    photo: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};