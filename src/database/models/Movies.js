module.exports = (Sequelize, dataTypes) =>{
    let alias = "Movies";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title:dataTypes.STRING
        ,
        awards:{
            type: dataTypes.INTEGER
        },
        rating:{
            type: dataTypes.FLOAT
        },
        length:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "movies",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Movies = Sequelize.define(alias,cols,config);
    Movies.associate = function(models){
        Movies.belongsTo(models.Genres,{
            as:'genres',
            foreignKey: "genre_id"
        });

        Movies.hasMany(models.Actors,{
            as:'actors',
            foreignKey: "favorite_movie_id"
        });
        
        Movies.belongsToMany(models.Actors,{
            as:'actores',
            through: 'actor_movie',
            foreignKey: "movie_id",
            otherKey:'actor_id',
            timestamps:false
        });
    }
    return Movies;
}