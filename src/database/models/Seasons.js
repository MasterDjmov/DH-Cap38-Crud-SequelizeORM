module.exports = (Sequelize, dataTypes) =>{
    let alias = "Seasons";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:{
            type: dataTypes.STRING
        },
        number:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        end_date:{
            type: dataTypes.DATE
        },
        serie_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "seasons",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Seasons = Sequelize.define(alias,cols,config);
    Seasons.associate = function(models){
        Seasons.hasMany(models.Episodes,{
            as:'episodes',
            foreignKey: "season_id"
        });
        Seasons.belongsTo(models.Series,{
            as:'series',
            foreignKey: "serie_id"
        });
    }
    return Seasons;
}