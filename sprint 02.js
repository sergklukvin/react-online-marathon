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
