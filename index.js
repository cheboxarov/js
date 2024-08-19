const myPromise = new Promise((resolve, reject) => {
    console.log("Start")
    setTimeout(() => {
        console.log("After 2 seconds")
        resolve()
        console.log("End")
    }, 2000)
})

myPromise.then(() => {
    console.log("Promise resolved")
})
console.log("123")
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(json => console.log(json))

const getNum = num => num

console.log(getNum(0))

import {getData} from "./modules/utils.mjs";
//
// getData("https://jsonplaceholder.typicode.com/posts")
// .then(data => console.log(data))
// .catch(error => console.error(error))

const asyncFunc = async () => {
    return "Success!"
}

let result = await asyncFunc()
console.log(result)

const timerPromise = () =>
    new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log("Timer starts")
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log(`Timer ended ${endTime - startTime}`)
}

asyncFn()