const toUnderscore = (string) => {
  if (typeof string === 'number') return String(string);
  const arr = string.split(/(?=[A-Z][a-z])/);
  const output = [];
  arr.map((word) => {
    output.push(word.toLowerCase());
    output.push('_');
  });
  if (output[output.length - 1] === '_') output.pop();
  return output.join('');
};
