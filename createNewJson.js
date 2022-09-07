const fs = require('fs');
const json = require('./pokedex.json');


const tableOfPokemons = [];

for (const pokemon of json) {
    const typeTab = [];
    for (const type of pokemon.type){
        
        if (type === "Grass"){
            typeTab.push("Plante");
        }
        else if (type === "Fire"){
            typeTab.push("Feu");
        }
        else if (type === "Flying"){
            typeTab.push("Vol");
        }
        else if (type === "Water"){
            typeTab.push("Eau");
        }
        else if (type === "Bug"){
            typeTab.push("Insecte");
        }
        else if (type === "Normal"){
            typeTab.push("Normal");
        }
        else if (type === "Electric"){
            typeTab.push("Electrik");
        }
        else if (type === "Ground"){
            typeTab.push("Sol");
        }
        else if (type === "Fairy"){
            typeTab.push("Fee");
        }
        else if (type === "Fighting"){
            typeTab.push("Combat");
        }
        else if (type === "Psychic"){
            typeTab.push("Psy");
        }
        else if (type === "Rock"){
            typeTab.push("Roche");
        }
        else if (type === "Dark"){
            typeTab.push("Tenebres");
        }
        else if (type === "Ghost"){
            typeTab.push("Spectre");
        }
        else if (type === "Steel"){
            typeTab.push("Acier");
        }
        else if (type === "Ice"){
            typeTab.push("Glace");
        }
        else if (type === "Dragon"){
            typeTab.push("Dragon");
        }
        else if (type === "Poison"){
            typeTab.push("Poison");
        }
    }
    const onePokemon = {
        "numero": pokemon.id,
        "nom": pokemon.name.french,
        "pv": pokemon.base.HP,
        "attaque": pokemon.base.Attack,
        "defense": pokemon.base.Defense,
        "attaque_spe": pokemon.base['Sp. Attack'],
        "defense_spe": pokemon.base['Sp. Defense'],
        "vitesse": pokemon.base.Speed,
        "type": typeTab
    }
    tableOfPokemons.push(onePokemon);
    
}

const jsonString = JSON.stringify(tableOfPokemons, null, 4);
fs.writeFile("pokedexComplet.json", jsonString, (e) => {
    if (e){
        console.log(e);
    }else{
        console.log("File written successfully !");
    }
});