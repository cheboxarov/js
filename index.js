obj = {
    "visible": true,
    "asd": "asd",
    "age": 123
}
console.log(obj)

a = 2

if (1 <= a && a <= 15) {
    console.log(a)
}

good = "Good"
evening = "Evening"

console.log(good+evening)

hello = "Hello"

function hello_world(hello) {
    console.log(hello+" world")
}

hello_world(hello)

let var_a
const CONST_A = 1
var_a = 228
console.log(CONST_A, var_a)

console.log(console.log(10)) // нихуя не выведет хех

a = {
    "a": 10,
}

copyOfA = a
copyOfA.a = 20

console.log(a)

let original = { a: 10, b: 20 };

//Оператор расширения (spread syntax)

// Создание копии и одновременное добавление нового свойства c
let copy = { ...original, c: 30 };

// Переопределение значения свойства b
let modifiedCopy = { ...original, b: 40 };

console.log(copy);          // { a: 10, b: 20, c: 30 }
console.log(modifiedCopy);  // { a: 10, b: 40 }


human = {
    "age": 18,
    "sex": "man"
}

human.say_age = function(){ console.log("Мне ", this.age, " лет!"); }

human.say_age()