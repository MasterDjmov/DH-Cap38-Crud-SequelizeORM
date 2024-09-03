const { format } = require('date-fns');
const { Association } = require('sequelize');
const db = require('../../database/models/index');

let moviesController = {
    list:(req,res)=>{
        db.Movies.findAll()
        .then(function(movies){
           const datos={
            meta:{
                status: 200,
                total: movies.length,
                url: "api/movies"
            },
            data: movies
           }
           return res.status(200).json(datos);
        })
        
    },
    show:(req,res)=>{
        db.Movies.findByPk(req.params.id)
        .then(function(movie){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/movies/"+req.params.id
            },
            data: movie
           }
           return res.status(200).json(datos);
        })
        
    },
    store:(req,res)=>{
        db.Movies.create(req.body)
        .then(function(movie){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/movies",
                created: "OK"
            },
            data: movie
           }
           return res.status(200).json(datos);
        })
      // res.json(req.body);
    },
    delete:(req,res)=>{
        db.Movies.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(response =>{
            const datos={
                meta:{
                    status: 200,
                    total_borrado: 1,
                    url: "api/movies",
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