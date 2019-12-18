/**
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * 思路：由于此矩阵的特性，从左下角开始查找
 */

function find(target, array) {
  const rowCount = array.length;
  const colCount = array[0].length;
  for (let i = rowCount - 1, j = 0; i >= 0 && j < colCount; ) {
    if (array[i][j] === target) {
      return true;
    }
    if (array[i][j] < target) {
      j++;
      continue;
    }
    if (array[i][j] > target) {
      i--;
      continue;
    }
  }
  return false;
}
