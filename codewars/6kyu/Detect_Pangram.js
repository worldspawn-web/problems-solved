const isPangram = (string) => {
  const alphabetCheck = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  string
    .toLowerCase()
    .split('')
    .map((letter) => {
      const index = alphabetCheck.indexOf(letter);
      if (index !== -1) alphabetCheck[index] = '_';
    });
  return alphabetCheck.filter((i) => i !== '_').length > 0 ? false : true;
};

// BETTER SOLUTION
function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
