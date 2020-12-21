//// task 1

const filterNums = (arrNum, compareNumber = 0, parameter = "greater") => {
  return arrNum.filter((el) =>
    parameter === "greater" ? compareNumber < el : compareNumber > el
  );
};

//// task 2
