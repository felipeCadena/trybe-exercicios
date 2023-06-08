const hydrate = (string) => {
  const splitString = string.split('');
  let water = 0;
  for (let i = 0; i < splitString.length; i += 1) {
    const number = parseInt(splitString[i]);
    if (number) {
      water += number;
  }
}

  let glass = 'copo';
   if (water > 1) {
    glass = 'copos';
  }

  return `${water} ${glass} de água`
};

console.log(hydrate('1 caipirinha'));