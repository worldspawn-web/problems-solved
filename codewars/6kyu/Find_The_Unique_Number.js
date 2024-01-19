const findUniq = (arr) => {
  let duplicateNum;
  if (arr[0] === arr[1]) {
    duplicateNum = Number(arr.filter((number) => number !== arr[0]));
  } else {
    arr[2] === arr[0] ? (duplicateNum = arr[1]) : (duplicateNum = arr[0]);
  }
  return duplicateNum;
};

findUniq([1, 0, 0]); // 2
