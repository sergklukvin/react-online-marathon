///task 1
///task 2
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
