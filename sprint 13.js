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

///// task4

class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static sortFlightRange(planesArray) {
    planesArray.sort((a, b) => a.calcFlightRange() - b.calcFlightRange());

    planesArray.forEach((element) => {
      console.log(`${element.model}: ${element.calcFlightRange()}`);
    });
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }

  calcFlightRange() {
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }

  calcFlightRange() {
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }

  calcFlightRange() {
    return (
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
    );
  }
}

//// task5
class PizzaMaker {
  constructor(size, kind) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    const presentIngredient = this.ingredients.indexOf(ingredient);

    if (presentIngredient === -1) {
      this.ingredients.push(ingredient);
      console.log(`${ingredient.param} has been added`);
    } else {
      console.log('Such an ingredient already exists!');
    }
  }

  deleteIngredient(ingredient) {
    const presentIngredientDel = this.ingredients.indexOf(ingredient);

    if (presentIngredientDel !== -1) {
      const delIngredient = this.ingredients.splice(presentIngredientDel, 1);
      console.log(`${delIngredient[0].param} has been deleted`);
    }
  }

  getIngredients() {
    return this.ingredients;
  }

  getSize() {
    return this.size.param;
  }

  getKind() {
    return this.kind.param;
  }

  calculatePrice() {
    let priseOfIng = 0;

    if (this.ingredients.length !== 0) {
      this.ingredients.forEach((el) => (priseOfIng += el.price));
    }

    return this.size.price + this.kind.price + priseOfIng;
  }

  calculateCalories() {
    let calorieOfIng = 0;

    if (this.ingredients.length !== 0) {
      this.ingredients.forEach((el) => (calorieOfIng += el.calorie));
    }

    return this.size.calorie + this.kind.calorie + calorieOfIng;
  }
}
