/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  let x = m - 1,
    y = 0;
  while (x >= 0 && y < n) {
    if (matrix[x][y] === target) return true;
    else if (matrix[x][y] < target) y++;
    else x--;
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ],
    5
  )
);
