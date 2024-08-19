import sum from "./modules/moduleOne.mjs"
import {
    one as oneRenamed,
    two
} from "./modules/moduleTwo.mjs"

console.log(sum(1,2))

console.log(oneRenamed, two)

function someFunc(a, b) {
    return a * b
}

console.table(someFunc.length)

class Comment  {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

var comment = new Comment("asdasd")
console.log(comment.votesQty)
comment.upvote()
console.log(comment.votesQty)


class Article {
    constructor(name, content, author) {
        this.name = name
        this.content = content
        this.author = author
    }

    getContent() {
        return this.content
    }
}

let article = new Article("asdasd0", "123123123", 123123)

let articles = []

for(let i = 0; i < 5; i++) {
    articles.push(new Article(`Name ${i}`, `Content ${i}`, i))
}

console.log(articles)

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }

    max() {
        return this.reduce((max, curr) => (max > curr ? max : curr), 0)
    }
}

let numbers = new NumbersArray()
numbers.push(1)
numbers.push(1)
numbers.push(5)
numbers.push(1)
numbers.push(1)
numbers.push(1)

console.log(numbers.sum())

console.log(numbers.max())