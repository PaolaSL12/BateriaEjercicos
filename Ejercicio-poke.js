const pokemon = {
    base_experience: 64,
    height: 7,
    name: "bulbasaur",
    sprites: {
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      }
    ],
    weight: 69,
  };

  



//! me piden el nombre del pokemon y sus tipos
let stringTipos = ``;

for (const tipo of pokemon.types) {
    stringTipos += `${tipo.type.name} `
}

console.log(`${pokemon.name} es tipo:  ${stringTipos}`);

//console.log("Bulbasaur tipo: grass poison");

//! me piden el nombre del pokemon y sus estadísticas

let stringStats = ``;


for (const stat of pokemon.stats) {
  stringStats += `${stat.stat.name}:${stat.base_stat} `;

}

console.log(`las estadisticas de ${pokemon.name} son: ${stringStats}` );