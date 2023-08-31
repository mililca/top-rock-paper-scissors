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

function checkGameResult(computerChoice, lowerPlayerChoice) {
    if (computerChoice === lowerPlayerChoice) {
        return "It's a draw!"
    }
    else if (computerChoice === "rock") {
        if (lowerPlayerChoice === "paper") {
            return "You win! Paper beats rock"
        }
        else if (lowerPlayerChoice === "scissors") {
            return "You lose! Rock beats scissors"
        }
    }
    else if (computerChoice === "paper") {
        if (lowerPlayerChoice === "rock") {
            return "You lose! Paper beats rock"
        }
        else if (lowerPlayerChoice === "scissors") {
            return "You win! Scissors beat paper"
        }
    }
    else if (computerChoice === "scissors") {
        if (lowerPlayerChoice === "rock") {
            return "You win! Rock beats scissors"
        }
        else if (lowerPlayerChoice === "paper") {
            return "You lose! Scissors beat paper"
        }
    }
    
}

console.log(checkGameResult(computerChoice, lowerPlayerChoice))

 // console.log(playerChoice) //