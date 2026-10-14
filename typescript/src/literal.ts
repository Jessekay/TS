function addPokemon(name: string, pokemonType: 'fire' | 'water' | 'electric') {
  console.log({name, pokemonType});
}

console.log(addPokemon('Pikachu', 'fire'))