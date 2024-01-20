const duplicateCount = (text) => {
  const checkerArr = [];
  const duplicates = [];
  const textArr = text.toUpperCase().split('');
  for (let i = 0; i < textArr.length; i += 1) {
    if (checkerArr.indexOf(textArr[i]) === -1) {
      checkerArr.push(textArr[i]);
    } else {
      if (duplicates.indexOf(textArr[i]) === -1) {
        duplicates.push(textArr[i]);
      }
    }
  }
  return duplicates.length;
};

console.log(duplicateCount('aabBcde')); // 2
