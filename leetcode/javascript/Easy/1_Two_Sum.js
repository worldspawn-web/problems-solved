const twoSum = (nums, target) => {
  const answer = [];
  for (let i = 0; i <= nums.length; i += 1) {
    for (let j = i + 1; j <= nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        answer.push(i, j);
        return answer;
      }
    }
  }
};
