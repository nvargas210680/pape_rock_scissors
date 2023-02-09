const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } 
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "is a Tie"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let ValidatedInput = false;
    while (ValidatedInput == false){
        const choice = prompt("Paper Rock Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            ValidatedInput = true;
            return choiceInLower;
        }

    }
}



function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("***********");
        if(checkWinner(playerSelection, computerSelection ) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection)){
            scoreComputer++;

        }

        
    }
    console.log("Game Over")
    if(scorePlayer < scoreComputer){
        console.log("Player was the Winner!");
    }
    else if(scoreComputer < scorePlayer){
        console.log("Computer was ther Winner!")
    }
    else{
        console.log("We have a Tie!");
    }
}
game()


