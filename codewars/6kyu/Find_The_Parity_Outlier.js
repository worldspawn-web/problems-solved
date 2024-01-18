const findOutlier = (integers) => {
  const arrEven = [];
  const arrOdd = [];
  for (let i = 0; i < integers.length; i += 1) {
    integers[i] % 2 === 0
      ? arrEven.push(integers[i])
      : arrOdd.push(integers[i]);
  }

  return arrEven.length === 1 ? arrEven[0] : arrOdd[0];
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // must be 11
