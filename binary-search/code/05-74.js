/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0,
    right = matrix.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const arr = matrix[mid];
    let start = 0,
      end = arr.length - 1;
    if (target === arr[start]) return true;
    else if (target === arr[end]) return true;
    else if (target < arr[start]) right = mid - 1;
    else if (target > arr[end]) left = mid + 1;
    else {
      while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (target === arr[mid]) return true;
        else if (target < arr[mid]) end = mid - 1;
        else start = mid + 1;
      }
      break;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    13
  )
);
