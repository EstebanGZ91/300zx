module.exports = (sequelize, DataTypes) => {
        
    const alias = "Usuario";
    const cols = {
            id: {
                    type: DataTypes.INTEGER(10),
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
            },
            nombre: {
                    type: DataTypes.STRING(80),
                    allowNull: false
            },
            nick: {
                    type: DataTypes.STRING(80),
                    allowNull: false
            },
            email: {
                    type: DataTypes.STRING(80),
                    allowNull: false
            },
            password: {
                    type: DataTypes.STRING(80),
                    allowNull: false
            },
            avatar: {
                    type: DataTypes.STRING(80),
                    allowNull: true
            },
            eliminado: {
                    type: DataTypes.BOOLEAN
            }
    };
    
    const config = {
            tableName: "Tarjeta",
            timestamps: false
    };
    
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (modelo) {

            Usuario.hasMany(modelo.Tarjeta, {
                    as:"tarjetas",
                    foreingKey: "id_tarjeta"
            });
            Usuario.hasMany(modelo.Factura, {
                    as:"facturas",
                    foreingKey: "id_usuario"
            });

    };
    
    
    return Tarjeta
}
