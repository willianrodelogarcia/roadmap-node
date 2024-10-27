const fs = require('node:fs');

async function readFile(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = fs.createReadStream('test.txt', { encoding: 'utf-8' });

readFile(readable);
