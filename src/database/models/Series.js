module.exports = (Sequelize, dataTypes) =>{
    let alias = "Series";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:{
            type: dataTypes.STRING
        },
        release_date:{
            type: dataTypes.DATE
        },
        end_date:{
            type: dataTypes.DATE
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "series",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Series = Sequelize.define(alias,cols,config);
    Series.associate = function(models){
        Series.belongsTo(models.Genres,{
            as:'genres',
            foreignKey: "genre_id"
        });
        Series.hasMany(models.Seasons,{
            as:'seasons',
            foreignKey: "serie_id"
        });
    }
    return Series;
}