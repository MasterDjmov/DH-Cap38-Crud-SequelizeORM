const { Association } = require('sequelize');
const Actors = require('../database/models/Actors');
const db = require('../database/models/index');
const { Op } = require('sequelize');
let actorsController = {
    movies:[],
    list:(req,res)=>{
        db.Actors.findAll({
            include:[
                {
                    association:"movies"
                },
                {
                    association:"moviesAll"
                }
            ]
        })
        .then(function(actors){
            console.log(actors.movies)
            res.render("actorsList",
                {
                    actors
                }
            )
        })
        
    },
    detail:(req,res)=>{
        db.Actors.findByPk(req.params.id,{
            include:[
                {
                    association:"movies"
                },
                {
                    association:"moviesAll"
                }]
        })
        .then(function(actor){
            res.render("actorsDetail",
                {
                    actor
                }
            )
        })
        
    },
    search:(req,res)=>{
        if (!req.body.cadena) {
            return actorsController.list(req, res);
        }
        db.Actors.findAll({
            //asi para and
            /*where:{
                last_name:{
                    [Op.like]: `%${req.body.cadena}%`
                },
                first_name:{
                    [Op.like]: `%${req.body.cadena}%`
                }
            }*/
            where: {
                [Op.or]: [
                    { last_name: { [Op.like]: `%${req.body.cadena}%` } },
                    { first_name: { [Op.like]: `%${req.body.cadena}%` } }
                ]
            }
        })
        .then(function(actors){
            res.render("actorsList",
                {
                    actors
                }
            )
        })
        
    }
}

module.exports = actorsController