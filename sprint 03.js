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

const Checker = require('./Checker.js');

class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  showFullName() {
    return this._fullName;
  }

  nameIncludes(data) {
    return this.showFullName().includes(data);
  }

  static studentBuilder() {
    return new this('Ihor Kohut', 'qc');
  }

  set direction(value) {
    this._direction = value;
  }

  get direction() {
    return this._direction;
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

/// test 5

function mapCreator(keys, values) {
  let newMap = new Map();
  for (let i = 0; i < keys.length; i++) {
    if (typeof values[i] === 'string') newMap.set(keys[i], values[i]);
  }
  return newMap;
}
