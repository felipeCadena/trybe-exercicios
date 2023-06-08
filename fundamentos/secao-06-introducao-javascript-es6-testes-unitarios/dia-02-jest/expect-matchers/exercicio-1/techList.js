
const techList = (array, name) => {
  const newArray = array.sort();
  const tech = [];

  if (array.length === 0) return 'Vazio!';

  for (let i = 0; i < newArray.length; i += 1) {
    tech.push({
      tech: newArray[i],
      name,
    });
  }

  return tech;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


module.exports = techList;