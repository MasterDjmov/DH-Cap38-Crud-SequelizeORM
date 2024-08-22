module.exports = (Sequelize, dataTypes) =>{
    let alias = "Genres";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active:{
            type: dataTypes.FLOAT
        }
    };
    let config = {
        tableName: "genres",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Genres = Sequelize.define(alias,cols,config);
    Genres.associate = function(models){
        Genres.hasMany(models.Movies,{
            as:'movies',
            foreignKey: "genre_id"
        });
        Genres.hasMany(models.Series,{
            as:'series',
            foreignKey: "genre_id"
        });
    }
    return Genres;
}