/**
 Do not return anything, modify nums1 in-place instead.
 */
interface MergeArrays {
  (nums1: number[], m: number, nums2: number[], n: number): void;
}

const mergeTs: MergeArrays = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

// Test Cases:
const testN1 = mergeTs([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // Expected: nums1 = [1,2,2,3,5,6]
const testN2 = mergeTs([1], 1, [], 0); // Expected: nums1 = [1]
const testN3 = mergeTs([0], 0, [1], 1); // Expected: nums1 = [1]
