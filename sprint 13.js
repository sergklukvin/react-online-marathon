///// task 1

function overloadedFunc(arg1 = [1, 2, 3], arg2 = 2, arg3 = (a, b) => a * b) {
  switch (true) {
    case arguments[0] === undefined &&
      arguments[1] === undefined &&
      typeof arguments[2] === 'function':
      return arg1.map((el, i) => (arg1[i] = el + arg2));
      break;
    case Array.isArray(arg1):
      return arg1.map((el, i) => (arg1[i] = el * arg2));
      break;
    default:
      return arg3(arg1, arg2);
      break;
  }
}

/// task2

const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
  constructor(curVehSpeed, overWarning) {
    privateSpeed.set(this, curVehSpeed);
    privateWarning.set(this, overWarning);
  }

  accelerate(value) {
    const curSpeed = privateSpeed.get(this) + value;

    if (curSpeed <= 200) {
      console.log(`Current speed: ${curSpeed} km/h`);
      privateSpeed.set(this, curSpeed);
    } else {
      console.log(`Current speed: ${curSpeed} km/h`);
      privateWarning.get(this)();
      privateSpeed.set(this, 200);
      console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
    }
  }
}

////task3

const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => str+'!!!';
const split = (separator) => str => str.split(separator);
const join = (separator) => str => str.join(separator);
const copy = (str) => `${str} ${str}`;

const createComposition = (...functions) => input => functions.reduce( 
    (acc, fn) => fn(acc),
    input
);

const result = createComposition(upperCase, tripleExclaim, split('_'), join(' '), copy);
