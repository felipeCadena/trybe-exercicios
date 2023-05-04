let word = 'tryber';
let drow = '';

for (let index = 0; index < word.length; index += 1) {
    drow += word[word.length - 1 - index];
}

// for (let index = word.length; index < word.length; index -= 1)  {
//     drow += word[ index];
// }

console.log(drow);


