const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("error")
    }


}



function getComputerChoice() {
    result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie game';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won'
        } else {
            return 'The player won'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won'
        } else {
            return 'The player won'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won'
        } else {
            return 'The player won'
        }
    }






}

//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'rock'));


const playGame = () => {

    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);


    console.log(determineWinner(userChoice, computerChoice))
};

playGame()