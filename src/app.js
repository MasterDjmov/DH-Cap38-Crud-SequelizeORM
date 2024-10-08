const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const multer = require('multer');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

//para api
const apiMoviesRoutes = require('./routes/api/moviesRouter');
const apiGenresRoutes = require('./routes/api/genresRouter');
const apiActorsRoutes = require('./routes/api/actorsRouter');

//node-fetch
const pokemonRoutes = require('./routes/pokemonRoutes');
const app = express();

app.use(methodOverride('_method'));
// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);
app.use('/api/genres',apiGenresRoutes);
app.use('/api/movies',apiMoviesRoutes);
app.use('/api/actors',apiActorsRoutes);
app.use('/pokemons',pokemonRoutes);
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
