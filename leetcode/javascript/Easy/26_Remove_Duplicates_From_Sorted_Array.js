const removeDuplicates = (nums) => {
  nums.splice(0, nums.length, ...new Set(nums));
};
