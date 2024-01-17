const removeElementTS = (nums: number[], val: number): number => {
  let startId = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[startId] = nums[i];
      startId += 1;
    }
  }
  return startId;
};
