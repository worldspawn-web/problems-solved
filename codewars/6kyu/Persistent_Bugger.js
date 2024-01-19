const convert2Num = (num) => Number(num);

const persistence = (num) => {
  let currentNum = num;
  let outputIndex = 0;
  while (currentNum >= 10) {
    const arr = Array.from(String(currentNum), convert2Num);
    let tempStore = 1;
    for (let i = 0; i < arr.length; i += 1) {
      tempStore *= parseInt(arr[i]);
    }
    currentNum = tempStore;
    outputIndex += 1;
  }
  return outputIndex;
};

persistence(25); // 4
// (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
