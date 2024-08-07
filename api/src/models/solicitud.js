module.exports = function (sequelize, DataTypes) {
  const Solicitud = sequelize.define('Solicitud',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      signatura: {
        type: DataTypes.STRING
      },
      denominaci_comercial: {
        type: DataTypes.STRING
      },
      grup: {
        type: DataTypes.STRING
      },
      subgrup: {
        type: DataTypes.STRING
      },
      inici_d_activitat: {
        type: DataTypes.STRING
      },
      estat: {
        type: DataTypes.STRING
      },
      municipi: {
        type: DataTypes.STRING
      },
      localitat: {
        type: DataTypes.STRING
      },
      direcci: {
        type: DataTypes.STRING
      },
      utm_x: {
        type: DataTypes.DOUBLE
      },
      utm_y: {
        type: DataTypes.DOUBLE
      },
      places: {
        type: DataTypes.DECIMAL
      },
      unitats: {
        type: DataTypes.DECIMAL
      },
      explotador_s: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.DOUBLE
      },
      longitude: {
        type: DataTypes.DOUBLE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'solicitud',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Solicitud.associate = function (models) {

  }

  return Solicitud
}
