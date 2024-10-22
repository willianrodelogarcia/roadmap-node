const axios = require('axios');

const getPokemon = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon');
};

function getPromises() {
  return Promise.all([getPokemon()]);
}

getPromises().then(result => {
  const [{ data }] = result;
  console.log(data);
});

const getPokemonSync = async () => {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
  console.log(result.data);
};

getPokemonSync();
