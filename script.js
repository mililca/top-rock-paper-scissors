const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
    let computerChoice = choices[Math.floor((Math.random() * choices.length))]
    return computerChoice
}

let computerChoice = getComputerChoice()

// console.log(computerChoice) //
