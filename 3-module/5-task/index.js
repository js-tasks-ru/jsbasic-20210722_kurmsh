
function getMinMax(str) {
  let sorted = str
    .split(' ')
    .filter((item) => !isNaN(+item))
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  return {
    min: sorted[0],
    max: sorted[sorted.length - 1]
  }
};