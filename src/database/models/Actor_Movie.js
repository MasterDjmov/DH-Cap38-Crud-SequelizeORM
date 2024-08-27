module.exports = (Sequelize, dataTypes) =>{
    let alias = "Actor_Movie";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        actor_id:{
            type: dataTypes.INTEGER
        },
        movie_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "actor_movie",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Actor_Movie = Sequelize.define(alias,cols,config);
    // Actor_Movie.associate = function(models){
    //     Actor_Movie.belongsTo(models.Actors,{
    //         as:'actors',
    //         foreignKey: "actor_id"
    //     });
    //     Actor_Movie.belongsTo(models.Movies,{
    //         as:'movies',
    //         foreignKey: "movie_id"
    //     });
    // }
    return Actor_Movie;
}