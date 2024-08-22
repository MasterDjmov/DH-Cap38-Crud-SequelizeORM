const { format } = require('date-fns');
const { Association } = require('sequelize');
const db = require('../database/models/index');
let moviesController = {
    list:(req,res)=>{
        db.Movies.findAll({
            include:[{association:"genres"}]
        })
        .then(function(movies){
           // console.log(movies[1].generos.name)
            res.render("moviesList",
                {
                    movies
                }
            )
        })
        
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id,{
            include:[{association:"genres"}]
        })
        .then(function(movie){
            res.render("moviesDetail",
                {
                    movie
                }
            )
        })
        
    },
    new:(req,res)=>{
        db.Movies.findAll({
            include:[{association:"genres"}],
            order:[['id','DESC']]
        })
        .then(function(movies){
            res.render("newestMovies",
                {
                    movies
                }
            )
        })
        
    },
    recomended:(req,res)=>{
        db.Movies.findAll({
            include:[{association:"genres"}],
            order:[['release_date','ASC']],
            limit:5
        })
        .then(function(movies){
            res.render("recommendedMovies",
                {
                    movies
                }
            )
        })
        
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
       res.render('moviesAdd');  
    },
    create: async function (req, res) {
        
            const { title, rating, awards, release_date, length } = req.body;
            
            // Usar el método `create` del modelo para insertar datos en la base de datos
            await db.Movies.create({
                title: title,
                rating: rating,
                awards: awards,
                release_date: release_date,
                length: length
            }).then(() => {
                res.redirect('/movies');    //lo envio a movie, aqui puedo usar un sweet
            })
            .catch(error => {
                console.error('Error al crear la película:', error);
                res.status(500).send('Error al crear la película');
            });
    },
    edit: function(req, res) {
        // TODO
        db.Movies.findByPk(req.params.id)
        .then(function(movie){
            res.render("moviesEdit",
                {
                    movie,fecha:format(movie.release_date, 'yyyy-MM-dd')
                }
            )
        })  
    },
    update: async function (req,res) {
        // TODO
        const { title, rating, awards, release_date, length } = req.body;
            
            // Usar el método `create` del modelo para insertar datos en la base de datos
            await db.Movies.update(
            //primero recibe los datos
            {
                title: title,
                rating: rating,
                awards: awards,
                release_date: release_date,
                length: length
            },
            //luego recibe el a quien modificar
            {
                where:{id:req.params.id}
            }).then(() => {
                res.redirect('/movies/detail/'+req.params.id);    //lo envio a movie, aqui puedo usar un sweet
            })
            .catch(error => {
                console.error('Error al actualizar la película:', error);
                res.status(500).send('Error al actualizar la película');
            });
    },
    delete: async function (req, res) {
        // TODO
        // Usar el método `create` del modelo para insertar datos en la base de datos
        await db.Movies.destroy(
            {
                where:{id:req.params.id}
            }).then(() => {
                res.redirect('/movies');    //lo envio a movie, lista general
            })
            .catch(error => {
                console.error('Error al borrar la película:', error);
                res.status(500).send('Error al borrar la película');
            });
        
    },
    destroy: function (req, res) {
        // TODO
        /*destory lo aplico arriba en el metodo delete*/
    }
}

module.exports = moviesController