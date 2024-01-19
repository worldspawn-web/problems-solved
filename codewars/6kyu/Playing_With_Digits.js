const convert2Num = (num) => Number(num);

const digPow = (n, p) => {
  const arr = Array.from(String(n), convert2Num);
  let sum = 0;
  let mathIndex = p;
  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    sum += Math.pow(num, mathIndex);
    mathIndex += 1;
  }
  const result = sum / n;
  return result % 1 !== 0 ? -1 : result;
};

console.log(digPow(46288, 3)); // 51
