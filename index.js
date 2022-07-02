// this is an object, a collection of variable - store data in depth - composite/complex data type
let player = {
    name: "Irfan",
    chips: 150,
    // sayHello: function () { // this is a function in the object
    //     console.log("hai")
    // }
}
// player.sayHello() // this is how you invoke the function in the object

let cards = [] // array - ordered list of item
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// you can also use querySelector to pick a specific element
// use the # to specify the element.
// when you change the id into class, use . instead of #
// ex: id="sum-el" => querySelector("#sum-el")
// ex: class="sum-el" => querySelector(".sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")

// to invoke the value of variable, we use . between the object and key 
playerEl.textContent = player.name + ": $" + player.chips

// create function getRandomCard()
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

// this function just to invoke the renderGame() function
function startGame() {
    console.log("START GAME was clicked")
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(cards)
    renderGame()
}

// render the game
function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: "
    // create a for loop that renders out all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "Congratulation! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // console.log(message)
    messageEl.textContent = message

}

function newCard() {
    console.log("NEW CARD was clicked")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // push the new card to the array
        cards.push(card)
        renderGame()
    }
}


// // CASH OUT!
// console.log(isAlive)
// console.log(hasBlackJack)

// practice 1
// let age = 101

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

// practice 2
// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// practice 3
// let skills = [
//     "I am very good at html and css", // index 0
//     "I have learned about vue.js, swift, sql, figma", // index 1
//     "I learned express.js, mongoDB, java, javascript, c++, but I have to learn it again" // index 2
// ]
// console.log(skills.length)

// console.log(skills[1])
// console.log(skills[2])
// console.log(skills[0])

// practice 4
// let mySelf = ["Irfan Ramadhan", 29, true]
// console.log(mySelf)

// practice 5
// let nachricht = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// console.log(nachricht)

// let neuNachricht = "Same here!"

// nachricht.push(neuNachricht)
// console.log(nachricht)

// let unsend = nachricht.pop()
// console.log(nachricht)

// practice 6
// for (let i = 10; i <= 100; i += 10) {
//     console.log(i)
// }

// practice 7
// DRY - Don't Repeat Yourself
// let nachricht = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "Thanks man"
// ]
// for (let i = 0; i < nachricht.length; i++) {
//     console.log(nachricht[i])
// }

// practice 8
// let kartu = [7, 3, 9, 2, 4, 10]
// for (i = 0; i < kartu.length; i++) {
//     console.log(kartu[i])
// }

// practice 9
// let sentence = ["Hello", "my", "name", "is", "irfan"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
//     console.log(sentence[i])
// }

// practice 10
// let player1Time = 102
// let player2Time = 107

// cmd + d to select multiple lines
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// practice 11
// let flooredNumber = Math.floor(12.3231231)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// console.log(rollDice())

// practice 12
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge || hasHintsLeft) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }

// practice 13
// let castle = {
//     cost: 150,
//     address: "rhinstrasse",
//     number: 91,
//     style: ["old-europe", "historic"],
//     isForRent: true
// }

// console.log(castle.cost)
// console.log(castle.style)

// practice 14
// let person = {
//     name: "Irfan",
//     age: 29,
//     country: "Indonesia"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// practice 15
// let age = 6
// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citzen discount")
// }

// practice 16
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largest countries in the world:")

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// practice 17
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift()
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// practice 18
// let dayOfMonth = 1
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// } else {
//     console.log("it's okay to go out")
// }

// practice 19
// let hands = ["rock", "paper", "scissor"]

// function getRandomHands() {
//     let randomIndex = Math.floor(Math.random() * hands.length)
//     return hands[randomIndex]
// }
// console.log(getRandomHands())

// practice 20
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍐"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function shelf() {
//     for (let i = 0; i < fruit.length; i++) {
//         console.log(fruit[i])
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += fruit[i]
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += fruit[i]
//         } else {
//             console.log("sorry, wrong fruit")
//         }
//     }
// }
// shelf()