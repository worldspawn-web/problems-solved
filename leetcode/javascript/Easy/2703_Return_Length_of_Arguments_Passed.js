const argumentsLength = (...args) => {
  const arguments = [...args];
  let length = 0;
  for (const arg of arguments) {
    length += 1;
  }
  return length;
};
