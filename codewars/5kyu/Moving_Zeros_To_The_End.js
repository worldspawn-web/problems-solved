const moveZeros = (arr) => {
  var filtedList = arr.filter((num) => num !== 0);
  var zeroList = arr.filter((num) => num === 0);
  return filtedList.concat(zeroList);
};
