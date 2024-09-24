console.log("Hello World") ;
function getComputerChoice(){
    let choice;
    let num=Math.random();
    if (num < 0.33) {
        choice = "rock";
    } else if (num < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice(){
    let choice=prompt("choose between rock, paper and scissors:");
    return choice;
}


function playRound(humanchoice, computerChoice){
    let roundResult = { humanScore: 0, computerScore: 0 };
    if (humanchoice === "rock" && computerChoice === "scissors") {
        console.log("Human victory: rock beats scissors");
        roundResult.humanScore++;
    } else if (humanchoice === "scissors" && computerChoice === "paper") {
        console.log("Human victory: scissors beat paper");
        roundResult.humanScore++;
    } else if (humanchoice === "paper" && computerChoice === "rock") {
        console.log("Human victory: paper beats rock");
        roundResult.humanScore++;
    } else if (humanchoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Computer victory");
        roundResult.computerScore++;
    }
    return roundResult;
}


function playGame(){
    let humanScore=0;
    let computerScore=0;
    for (i=0; i<5; i++) {
        let computerChoice = getComputerChoice();
        console.log("Computer chose: " + computerChoice);
        
        let humanChoice = getHumanChoice();
        console.log("Human chose: " + humanChoice);

        let roundResult = playRound(humanChoice, computerChoice);  // Ricevi il risultato del round
        humanScore += roundResult.humanScore;  // Aggiorna il punteggio umano
        computerScore += roundResult.computerScore;  // Aggiorna il punteggio del computer

        console.log(`Current Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}
playGame();