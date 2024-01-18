const repeatStr = (n, s) => {
  const arr = Array.from(s);
  for (let i = 1; i < n; i += 1) {
    arr.push(s);
  }
  return arr.join('');
};
