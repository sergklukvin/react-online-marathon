////task1

localStorage.setItem('login', 'Tom12!');
localStorage.setItem('token', 'QhuR56Rw');

////task2

let obj = {
    name: "Tom", 
    age: 25 
};

localStorage.setItem('user', JSON.stringify(obj));

/////task3

localStorage.removeItem('name');


////task4

localStorage.clear();
