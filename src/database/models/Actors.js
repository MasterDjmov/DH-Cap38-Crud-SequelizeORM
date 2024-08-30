module.exports = (Sequelize, dataTypes) =>{
    let alias = "Actors";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.FLOAT
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "actors",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Actors = Sequelize.define(alias,cols,config);
    Actors.associate = function(models){
        Actors.belongsTo(models.Movies,{
            as:'movies',
            foreignKey: "favorite_movie_id"
        });
        
        Actors.belongsToMany(models.Movies, {
            as: 'moviesAll',
            through: 'actor_movie',
            foreignKey: "actor_id",
            otherKey: 'movie_id',
            timestamps: false
        });
    }
    return Actors;
}