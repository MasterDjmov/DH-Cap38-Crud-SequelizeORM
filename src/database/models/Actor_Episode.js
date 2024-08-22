module.exports = (Sequelize, dataTypes) =>{
    let alias = "Actor_Episode";
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        actor_id:{
            type: dataTypes.INTEGER
        },
        episode_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "actor_episode",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Actor_Episode = Sequelize.define(alias,cols,config);
    Actor_Episode.associate = function(models){
        Actor_Episode.belongsTo(models.Actors,{
            as:'actors',
            foreignKey: "actor_id"
        });
        Actor_Episode.belongsTo(models.Episodes,{
            as:'episodes',
            foreignKey: "episode_id"
        });
    }
    return Actor_Episode;
}