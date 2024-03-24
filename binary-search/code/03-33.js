/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (target === nums[left]) return left;
    if (target === nums[mid]) return mid;
    if (target === nums[right]) return right;
    if (nums[left] < nums[mid]) {
      if (nums[left] < target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target < nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};

search([3, 1], 1);
