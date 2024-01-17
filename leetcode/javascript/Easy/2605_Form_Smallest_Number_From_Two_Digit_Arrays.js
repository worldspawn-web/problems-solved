const minNumber = (arr1, arr2) => {
  let both = [];
  for (const i of arr1) {
    if (arr2.includes(i)) both.push(i);
  }
  if (both.length > 0) return Math.min(...both);
  let pArr1 = Math.min(...arr1);
  let pArr2 = Math.min(...arr2);
  return pArr1 < pArr2 ? pArr1 + '' + pArr2 : pArr2 + '' + pArr1;
};
