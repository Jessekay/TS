function addPokemon(name: string, pokemonType: 'fire' | 'water' | 'electric') {
  console.log({name, pokemonType});
}

const pokemon = {
  name: 'Pikachu',
  pokemonType: 'water'
} as const;

console.log(addPokemon(pokemon.name, pokemon.pokemonType));