const electrons_around_the_cores = (dices) => {
  let sum = 0;
  dices.map((dice) => {
    if (dice === 3) sum += 2;
    if (dice === 5) sum += 4;
  });
  return sum;
};
