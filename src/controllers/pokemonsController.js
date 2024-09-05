const { format } = require('date-fns');
const { Association } = require('sequelize');
const db = require('../database/models/index');

//npm install node-fetch@2
const fetch = require('node-fetch');

let moviesController = {
    //usando nodefetch
    List:(req, res)=>{
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response=>response.json())
        .then(pokemons=>{
            //console.log(pokemons.results)
           res.render('pokemonsList',{pokemons:pokemons.results})
        })
    },
    Details:(req, res)=>{
        //recibo una query
        let query = req.query.pokemon;
        
        fetch(query)
        .then(response=>response.json())
        .then(pokemon=>{
            console.log(pokemon)
           res.render('pokemonDetail',{pokemon:pokemon})
        })
    }
}

module.exports = moviesController

//mi api de peliculas
//40e81d82