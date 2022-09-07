const express = require('express');
const router = require('./app/router');

//const pokemonList = require('../data/pokedex.json');
const app = express();
const port = 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(router);

app.use((request, response, next) => {
    response.status(404).render('404.ejs');
});

app.listen(port, () =>{
    console.log(`Listening http://localhost:${port}`);
});