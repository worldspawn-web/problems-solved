const chunk = (arr, size) => {
  let length = arr.length;
  let answer = [];

  for (let i = 0; i < length; i += size) {
    answer.push(arr.slice(i, i + size));
  }

  return answer;
};
