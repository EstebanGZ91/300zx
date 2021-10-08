module.exports = (sequelize, DataTypes) => {
        
    const alias = "Producto";
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
            fecha_creacion: {
                    type: DataTypes.DATE,
                    allowNull: false
            },
            fecha_modificacion: {
                    type: DataTypes.DATE,
                    allowNull: true
            },
            precio: {
                    type: DataTypes.DECIMAL(8,2),
                    allowNull: false
            },
            imagen: {
                    type: DataTypes.STRING(80),
                    allowNull: true
            },
            eliminado: {
                    type: DataTypes.BOOLEAN
            },
            descuento: {
                    type: DataTypes.INTEGER(2),
                    allowNull: true
            }
    };
    
    const config = {
            tableName: "Producto",
            timestamps: false
    };
    
    const Producto = sequelize.define(alias, cols, config);

      Producto.associate = function(modelo) {

        //   Producto.belongsToMany(modelo.Factura, {
        //       as: "facturas",
        //       through: "Producto_factura",
        //       foreignKey: "id_producto",
        //       otherKey: "id_factura",
        //       timestamps: false
        //   });
          Producto.belongsTo(modelo.Categoria, {
                  as:"categorias",
                  foreingKey: "id_categoria"
          });
        }
    
    
    return Producto
}
