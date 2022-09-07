const express = require('express');
const router = express.Router();
const pokemonList = require('../data/pokedexComplet.json');

router.get('/', (request, response) => {
    response.render('home', {pokemonList});
});

router.get('/details/:pokemonNumber', (request, response, next) => {
    const pokemonNumber = Number(request.params.pokemonNumber);
    
    const pokemon = pokemonList.find(pokemon => pokemon.numero === pokemonNumber);

    const loweredValue = [];

    if (pokemon !== undefined){
        const pokemonStats = {
            pv: pokemon.pv,
            attaque: pokemon.attaque,
            defense: pokemon.defense,
            attaque_spe: pokemon.attaque_spe,
            defense_spe: pokemon.defense_spe,
            vitesse: pokemon.vitesse
        };

        for (const type of pokemon.type) {
            loweredValue.push(type.toLowerCase());
        }

        pokemon.type = loweredValue;

        response.render('details',{pokemon, pokemonStats});
    }
    else {
        next();
    }
});

router.get('/types', (request, response) => {
    const allTypes = [];

    for (const pokemon of pokemonList){
        for (const type of pokemon.type) {
            if (!allTypes.includes(type.toLowerCase())){
                allTypes.push(type.toLowerCase());
            }
        }
    }
    allTypes.sort();

    response.render('types', { allTypes });
});

router.get('/type/:typeName', (request, response, next) => {
    const requestedType = request.params.typeName;

    const pokemonsOfType = pokemonList.filter(pokemon =>
        pokemon.type.some(str =>
            str.toLowerCase() === requestedType));

    if (pokemonsOfType !== undefined){
        response.render('specificType', { pokemonsOfType });
    }
    else{
        response.send('Aucun Pokemon de ce type !');
    }
});

module.exports = router;