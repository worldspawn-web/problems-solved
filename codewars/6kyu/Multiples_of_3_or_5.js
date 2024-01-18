const solution = (number) => {
  if (number < 0) return 0;
  let sum = 0;
  for (let i = 3; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
};
