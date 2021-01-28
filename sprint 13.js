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
