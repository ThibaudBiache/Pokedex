const pokedexJSON = require('./pokedexComplet.json');
const fs = require('fs');

for (const pokemon of pokedexJSON) {
    const string = `('${pokemon.nom}', ${pokemon.pv}, ${pokemon.attaque}, ${pokemon.defense}, ${pokemon.attaque_spe}, ${pokemon.defense_spe}, ${pokemon.vitesse}, '${pokemon.type}'),\n`;
    fs.appendFileSync("pokedex.sql", string);
};