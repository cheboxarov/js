
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

// console.log(console.log(10)) // нихуя не выведет хех

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

json_human = JSON.stringify(human) // jsobject -> json

console.log(json_human);

unjson_human = JSON.parse(json_human) // json -> jsobject

console.log(unjson_human)

const c = 10

let b = c

b = 30

console.log(c)
console.log(b)

const gl_a = 5;

function outerFn(...args) {
    function innerFn(args) {
        console.log(gl_a, ...args)
    }
    return innerFn(args)
}

outerFn(a=1,2,2,3,4)

j = true

console.log(!j || j && !j)

name = "Alice"
alice_age = 19

console.log(`${name} ${alice_age}`)


function funcWithCallback(callback) {
    return callback()
}

console.log(funcWithCallback(function(){console.log("Callback function"); return 1}))

function defMultiplier() {
    return 1
}

function multiplyByFactor(value, multiplier = defMultiplier()) {
    return value * multiplier
}

console.log(multiplyByFactor(multiplyByFactor(100, multiplyByFactor(100)), 2))

const fnWithError = () => {
    throw new Error("some error")
}

try {
    fnWithError();
} catch (error) {
    console.log(error.message)
}

console.log("Continue")

// Инструкции ниче не понимаю вообще

let f;

const s = 5;

f = 2

if(f < s) {
    console.log(f)
}

for (let i = 0; i < f; i++) {
    console.log(i)
}

const lodash = require('lodash');

const myArray = [1,2,3,4]
console.log(myArray)

const myArray2 = [1,2,3,4]
console.log(myArray2)

console.log(lodash.isEqual(myArray, myArray2)); // true

myArray.push(123)
myArray.push(321)

console.log(myArray)

poped_element = myArray.pop()

console.log(poped_element, myArray)

// логика короч query

my_query = []
my_query.unshift(1)
my_query.unshift(2)
my_query.unshift(3)
my_query.unshift(4)

console.log(my_query.pop())
console.log(my_query.pop())
console.log(my_query.pop())
console.log(my_query.pop())

// логика стека хех

my_stack = []
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)

console.log(my_stack.pop())
console.log(my_stack.pop())
my_stack.push(3)
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())

templateArray = [1,2,3,4,5]

templateArray.forEach(el => {
    if (el === 1) {
        console.log(`${el} <- ЭТО ОДНЕРКА И ОНА ТУТ ЕСТЬ`)
    }
})

for (let index in templateArray) {
    if (templateArray[index] === 1) {
        console.log(`${templateArray[index]} <- ЭТО ОДНЕРКА И ОНА ТУТ ЕСТЬ, только использую for in `)
    }
}

Object.keys(templateArray).forEach(key => {
    console.log(key, templateArray[key])
})

templateArray.forEach(el => console.log(el))
newArray = templateArray.map(el => el * 3)
newArrayCopy = [...newArray]
newArrayCopy.push(123123123)
console.log(newArray)
console.log(newArrayCopy)

const userProfile = {
    username: "Bogdan",
    age: 18
}

const { username, age } = userProfile

console.log(username,age)

const userInfo = ({username, age}) => {
    console.log(username, age)
}

userInfo(userProfile)

userAlive = false

console.log(userAlive ? "Юзер живой" : "Юзер сдох")

const myString = "Hey"

for(let ch of myString) {
    console.log(ch)
    ch = "1"
}

console.log(myString)