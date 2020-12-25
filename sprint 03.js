/// test 01

function getMin(arr) {
  return Math.min.apply(null, arr);
}

/// test 02

///test 03

const Checker = require('./Checker.js');

class Movie {
  constructor(name, category, startShow) {
    this.name = name;
    this.category = category;
    this.startShow = startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}

const movie1 = new Movie('Titanic', 'drama', 1997);
const movie2 = new Movie('Troya', 'historical', 2004);

/// test 4

/// test 5

function mapCreator(keys, values) {
  let newMap = new Map();
  for (let i = 0; i < keys.length; i++) {
    if (typeof values[i] === 'string') newMap.set(keys[i], values[i]);
  }
  return newMap;
}
