module.exports = (Sequelize, dataTypes) =>{
    let alias = "Episodes";
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
        rating:{
            type: dataTypes.FLOAT
        },
        season_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "episodes",
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
    const Episodes = Sequelize.define(alias,cols,config);
    Episodes.associate = function(models){
        Episodes.belongsTo(models.Seasons,{
            as:'seasons',
            foreignKey: "season_id"
        })
    }
    return Episodes;
}