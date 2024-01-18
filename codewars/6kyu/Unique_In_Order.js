const uniqueInOrder = (iterable) => {
  if (typeof iterable !== 'object') {
    iterable.split('');
  }
  const newArr = [];
  for (let i = 0; i < iterable.length; i += 1) {
    if (iterable[i] !== iterable[i + 1]) newArr.push(iterable[i]);
  }

  return newArr;
};

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
