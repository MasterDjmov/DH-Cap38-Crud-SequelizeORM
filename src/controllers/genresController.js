const { Association } = require('sequelize');
const Genres = require('../database/models/Genres');
const db = require('../database/models/index');
let genresController = {
    movies:[],
    list:(req,res)=>{
        db.Genres.findAll({
            include:[{association:"movies"}]
        })
        .then(function(genres){
            console.log(genres[1].movies)
            res.render("genresList",
                {
                    genres
                }
            )
        })
        
    },
    detail:(req,res)=>{
        db.Genres.findByPk(req.params.id)
        .then(function(genre){
            res.render("genresDetail",
                {
                    genre
                }
            )
        })
        
    }
}

module.exports = genresController