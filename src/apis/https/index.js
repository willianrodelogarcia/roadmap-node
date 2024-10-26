const https = require('https');

const request = https.get('https://pokeapi.co/api/v2/pokemon', res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});
