module.exports = (sequelize, DataTypes) => {
        
        const alias = "Tarjeta";
        const cols = {
                id: {
                        type: DataTypes.INTEGER(10),
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false
                },
                titular: {
                        type: DataTypes.STRING(80),
                        allowNull: false
                },
                nro_tarjeta: {
                        type: DataTypes.STRING(80),
                        allowNull: false
                },
                cod_seguridad: {
                        type: DataTypes.INTEGER(10),
                        allowNull: false
                },
                vencimiento: {
                        type: DataTypes.DATE,
                        allowNull: false
                }
        };
        
        const config = {
                tableName: "Tarjeta",
                timestamps: false
        };
        
        const Tarjeta = sequelize.define(alias, cols, config);

        Tarjeta.associate = function (modelo) {

                Tarjeta.belongsTo(modelo.Usuario, {
                        as:"usuarios",
                        foreingKey: "id_tarjeta"
                });
        };
        
        
        return Tarjeta

}