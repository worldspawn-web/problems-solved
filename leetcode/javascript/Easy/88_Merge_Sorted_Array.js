/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

// Test Cases:
const test1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // Expected: nums1 = [1,2,2,3,5,6]
const test2 = merge([1], 1, [], 0); // Expected: nums1 = [1]
const test3 = merge([0], 0, [1], 1); // Expected: nums1 = [1]
