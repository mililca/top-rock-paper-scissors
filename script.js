const choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    let computerChoice = choices[Math.floor((Math.random() * choices.length))]
    return computerChoice
}

let computerChoice = getComputerChoice()

// console.log(computerChoice) //

let playerChoice = prompt("Make your choice: ")
let lowerPlayerChoice = playerChoice.toLowerCase()

function checkPlayerChoice (choice) {
    if (!(choices.includes(lowerPlayerChoice))) {
        console.log("Pick one from rock, paper or scissors.")
    }
}

checkPlayerChoice(lowerPlayerChoice)

 // console.log(playerChoice) //