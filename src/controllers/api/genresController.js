const { format } = require('date-fns');
const { Association } = require('sequelize');
const db = require('../../database/models/index');

let moviesController = {
    list:(req,res)=>{
        db.Genres.findAll()
        .then(function(genres){
           const datos={
            meta:{
                status: 200,
                total: genres.length,
                url: "api/genres"
            },
            data: genres
           }
           res.status(200).json(datos);
        })
        
    },
    show:(req,res)=>{
        db.Genres.findByPk(req.params.id)
        .then(function(genre){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/genres/"+req.params.id
            },
            data: genre
           }
           return res.status(200).json(datos);
        })
        
    },
    store:(req,res)=>{
        db.Genres.create(req.body)
        .then(function(genre){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/genres",
                created: "OK"
            },
            data: genre
           }
           return res.status(200).json(datos);
        })
      // res.json(req.body);
    },
    delete:(req,res)=>{
        db.Actors.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(response =>{
            const datos={
                meta:{
                    status: 200,
                    total_borrado: 1,
                    url: "api/genres",
                    method: "delete",
                    result: response
                }
               }
           return res.status(200).json(datos);
        })
      // res.json(req.body);
    }
}
module.exports = moviesController