//task1

function modifyArray(array) {
   array[0] = 'Start';
   array[array.length-1] = 'End';

   return array;
}

//task2

function combineArray(arr1, arr2) {
   return arr1.concat(arr2).filter(el => typeof el === 'number');
}

//task3 

function longestLogin(loginList) {
  const longWord = (longer, currentWord) => longer.length > currentWord.length ? longer : currentWord;
  return loginList.reduce(longWord);
}

//task4

function factorial(n) {
  let result = 1;

  if (n <= 1) {
    return result;
  }

  do {
    result = result * n;
    n--;
  } while (n !== 1);

  return result;
}

function processArray(arr, factorial) {
    let newArr = arr.map((el) => factorial(el));

    return newArr;
}

//task5
function checkAdult(age){
    
  try {
    if (age === undefined) {
      throw new Error('Please, enter your age');
    } else if (age < 0) {
      throw new Error('Please, enter positive number');
    } else if (typeof age !== 'number') {
      throw new Error('Please, enter number');
    } else if (parseInt(age) !== age) {
      throw new Error('Please, enter Integer number');
    } else if (age < 18) {
      throw new Error('Access denied - you are too young!');
    } else {
      console.log('Access allowed');
    }
  } catch (exception) {
    console.log(`${exception.name} ${exception.message}`);
  } finally {console.log('Age verification complete')}
    
}
