const fs = require('fs').promises;

//read files
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}

//create a file
// if we add the object {flag: 'a'} the file will be upadted without overwrite the last file created
async function writeFile() {
  try {
    const csvHeader = 'name,last name';
    await fs.writeFile('test-csv.csv', csvHeader);
    // add more information at the csv
    const moreData = '\nWill, Rod';
    await fs.writeFile('test-csv.csv', moreData, { flag: 'a' });
  } catch (err) {
    console.log(err);
  }
}

async function deleteFile(filePath) {
  try {
    filePath.map(async path => {
      await fs.unlink(path);
    });
  } catch (err) {
    console.log(err);
  }
}

async function isExist(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    console.log('The file exist');
  } catch (err) {
    console.log(err);
  }
}

//readFile('test-file.txt');
//writeFile();
//deleteFile(['test-csv.csv', 'test-file.txt']);
isExist('test-csv.csv');
