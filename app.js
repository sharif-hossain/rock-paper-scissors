let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result >p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function() {
    playGame('Rock');
    // console.log('u clicked')

});
paper.addEventListener('click', function() {
    playGame('Paper');

});
scissors.addEventListener('click', function() {
    playGame('Scissors');

});
// playGame('Rock');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}
// console.log(getComputerChoice());
function win(user, computer) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = user + " cover " + computer + ".You Win";
}

function lose(user, computer) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = user + " lose " + computer + ".You Lost";
}

function draw(user, computer) {
    result.innerHTML = user + " equal to " + computer + ". Its a Draw";

}

function playGame(userChoice) {
    // console.log('user ', userChoice);
    var compChoice = getComputerChoice();
    // console.log('user:', userChoice);
    // console.log('comp:', computerChoice);
    switch (userChoice + " " + compChoice) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            win(userChoice, compChoice);
            break;
        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            lose(userChoice, compChoice);
            break;
        case "Rock Rock":
        case 'Paper Paper':
        case 'Scissors Scissors':
            draw(userChoice, compChoice);
            break;


    }

}


// const compchoices = computerChoice();
// console.log(compchoices);