function searchPokemon(){
  var pokeInput = document.querySelector('#pokeInput');
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokeInput.value.toLowerCase())
  .then(res => {
    return res.json();
  })
  .then(res => {
    // changes pokemon image 
    var pokemonImg = document.querySelector('#pokemonImg');
    pokemonImg.src = res.sprites.front_default;
})

}