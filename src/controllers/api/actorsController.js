const { format } = require('date-fns');
const { Association } = require('sequelize');
const db = require('../../database/models/index');

let moviesController = {
    list:(req,res)=>{
        db.Actors.findAll()
        .then(function(actors){
           const datos={
            meta:{
                status: 200,
                total: actors.length,
                url: "api/actors"
            },
            data: actors
           }
           res.status(200).json(datos);
        })
        
    },
    show:(req,res)=>{
        db.Actors.findByPk(req.params.id)
        .then(function(actor){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/actors/"+req.params.id
            },
            data: actor
           }
           return res.status(200).json(datos);
        })
        
    },
    store:(req,res)=>{
        db.Actors.create(req.body)
        .then(function(actor){
           const datos={
            meta:{
                status: 200,
                total: 1,
                url: "api/actors",
                created: "OK"
            },
            data: actor
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
                    url: "api/actors",
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