const catchSignChange = (arr) => {
  let status = arr[0] > -1 ? true : false;
  let counter = 0;
  const updateCounter = () => {
    counter += 1;
    status = !status;
  };

  arr.map((num) => {
    if ((num > -1 && !status) || (num < 0 && status)) updateCounter();
  });
  return counter;
};
