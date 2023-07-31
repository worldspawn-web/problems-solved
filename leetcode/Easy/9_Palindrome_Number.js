const isPalindrome = (x) => {
  const result = Number(String(x).split('').reverse().join(''));
  return result == x;
};
