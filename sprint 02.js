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

////task4

const maxInterv = (...arr) => {
  let maxNum = Math.abs(arr[1] - arr[0]);
  if(arr.length <=1) return 0;
  for (let i = 1; i < arr.length - 1; i++) {
    maxNum > Math.abs(arr[i + 1] - arr[i]) ? maxNum : (maxNum = Math.abs(arr[i + 1] - arr[i]));
  }
  return maxNum;
};

////// task4.1

const maxInterv = (...arr) => {
    let maxNum = Math.abs(arr[1] - arr[0]), currentNum, result;
    if(arr.length <=1) return 0;
    for (let i = 1; i < arr.length - 1; i++) {
      currentNum = Math.abs(arr[i + 1] - arr[i]);
      result = maxNum > currentNum ? maxNum : currentNum;
    }
    return result;
  };
