///task 1

function getPromise(delay, message) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(message), delay);
  });
}


///task 2

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y);
    } else {
      reject('Error!');
    }
  });
}


///task 3

const { getUser, getUserProfile } = require('./Helper.js');

async function getAge() {
  let objUser = await getUser();
  let objUserProfil = await getUserProfile(objUser.id);
  return objUserProfil.age;
}


///task 4

function* take(n, iterable) {
  for (let i = 0; i < n; i++) {
    yield iterable[i];
  }
}
