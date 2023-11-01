const fs = require('fs').promises;

// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
//   strings.forEach((string) => console.log(string))
// }

// async function main() {
//   await readAll();
// }

// main();

// async function getSimpsonById(id) {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');
  
//   const simpsons = JSON.parse(fileContent);

//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }

//   return chosenSimpson;
// }

// async function main() {
//   const simpson = await getSimpsonById(99);
//   console.log(simpson);
// }

// main();


// async function filterSimpsons() {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');
  
//   const simpsons = JSON.parse(fileContent);

//   const newArraySimpson = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArraySimpson));
// }

// async function main() {
//   await filterSimpsons();
// }

// main();


// async function newArraySimpsons() {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');
  
//   const simpsons = JSON.parse(fileContent);

//   const newArray = simpsons.filter((simpson) => simpson.id <= '4');

//   console.log(newArray);

//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
// }

// async function main() {
//   await newArraySimpsons();
// }

// main();

// async function addNelsonToFamily() {
//   const fileContent = await fs
//     .readFile('./simpsonFamily.json', 'utf-8');

//   const simpsonsFamily = JSON.parse(fileContent);

//   simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
// }

// async function main() {
//   await addNelsonToFamily();
// }

// main()

async function replaceSimpsons() {
  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  const newArray = simpsonsFamily.filter((simpson) => simpson.id !== '8');

  newArray.push({ id: '5', name: 'Maggie Simpson' });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function main() {
  await replaceSimpsons();
}

main()