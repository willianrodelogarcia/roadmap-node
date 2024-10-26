async function getData(url) {
  try {
    const result = await fetch(url);
    const json = await result.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
}

getData('https://pokeapi.co/api/v2/pokemon');
