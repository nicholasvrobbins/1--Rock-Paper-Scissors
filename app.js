const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result-choice')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Won'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Won'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Lost'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Won'
    }

    resultDisplay.innerHTML = result
}

/* Learned more about creating variables then linking those variables into functions and creating logical if statements, then linking the results in with the document.querySelectorAll (which selects ALL the elements of that name, in this case we selected all the buttons on the page) & document.getElementByID (which selects the specific element of that name between the HTML file and JavaScript, like user-choice). Used .innerHTML to change the HTML of our linked HTML file when something happens, in this case a click. Also used an event listener to listen for the click which prompts the function to execute. */