'use strict';
module.exports = (sequelize, DataTypes) => {
  const PasswordResetToken = sequelize.define('PasswordResetToken', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  PasswordResetToken.associate = function(models) {
    // associations can be defined here
    PasswordResetToken.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE'
    });
  };

  return PasswordResetToken;
};
