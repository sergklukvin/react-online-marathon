//// task 1

const filterNums = (arrNum, compareNumber = 0, parameter = "greater") => {
  return arrNum.filter((el) =>
    parameter === "greater" ? compareNumber < el : compareNumber > el
  );
};

//// task 2

const sumOfLen = (...string) => {
  let count = 0;
  string.forEach(element => count += element.length);
  return count;
};


////task 3

const howMuchSec = (...arr) => {
  if (arr.length === 0) return 0;
  let dataArr = [1, 60, 3600, 86400, 604800, 2592000, 31104000];
  return arr.reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + currentValue * dataArr[currentIndex];
  });
};
