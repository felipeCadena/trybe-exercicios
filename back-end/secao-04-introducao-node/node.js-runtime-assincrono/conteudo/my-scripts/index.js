const { log } = require('console');
const fs = require('fs');
const fsPromise = require('fs').promises;

const simpsons = 'simpsons.json';

// try {
//   const data = fs.readFileSync(simpsons);
//   const arraySimpsons = JSON.parse(data);
//   arraySimpsons.map((s) => 
//     console.log(`${s.id} - ${s.name}`))
// } catch (err) {
//   console.error('Erro ao ler arquivo')
//   console.log(err);
// }

const character = async (id) => {
  try {
    const data = await fsPromise.readFile(simpsons);
    const arraySimpsons = JSON.parse(data);
    console.log(arraySimpsons.includes(id));
    if (arraySimpsons.includes(id)) {
      arraySimpsons.find((s) => 
    console.log(`${id} - ${s.name}`))
    }
  } catch (err) {
    console.error('Id não encontrado')
    console.log(err)
  }
}

character('1');