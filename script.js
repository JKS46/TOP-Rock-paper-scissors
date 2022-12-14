const player=document.querySelector("#playerScore");
const computer=document.querySelector("#computerScore");
const makeChoice = document.querySelector("#makeChoice");
const resultText = document.querySelector("#result");
const gameResult = document.querySelector("#gameResult");
const playerSelection = document.querySelectorAll(".choice>button");
gameResult.style.color = "red";
makeChoice.style.color = "orange";

let i = 1;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    /* *3 instead of *10 is also possible resulting in the output being 1 to 3 */
    // math.floor for rounding down
    // math.random for generating random number in range 0-1,i.e 0.123456789
    if(randomNumber < 4){
        return "rock";
    }
    else if(randomNumber < 7){
        return "paper";
    }
    else
        return "scissors";
}
function valueReset(){
    resultText.textContent = "Make your choice";
    makeChoice.textContent = "";
    gameResult.textContent = "";
    playerScore = 0;
    computerScore = 0;
    i=1;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
         return "It's a tie!";
     }
    else if(playerSelection == "rock" && computerSelection == "paper"){
         return "You lose! Paper beats rock";
     }
    else if(playerSelection == "rock"  && computerSelection == "scissors"){
        return "You Win! Rock beats scissors";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats paper";
    }
}
function game(playerSelection,rounds){
    makeChoice.textContent = "Make your choice for next round";
    if(i==1){
        gameResult.textContent = "";
        player.textContent = playerScore;
        computer.textContent = computerScore;
    }
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if(result.includes("Win")){
        playerScore++;
        player.textContent=playerScore;
    }
    else if(result.includes("lose")){
        computerScore++;
        computer.textContent=computerScore;
    }
    console.log(result);

    resultText.textContent = "Round "+(rounds-(rounds-i))+" :"+result;
    i++;
    if(i>rounds){
        if (playerScore > computerScore){
            gameResult.textContent = "You won the game!";
        }
        else if(playerScore < computerScore){
            gameResult.textContent = "You lost the game!";
        }
        else{
            gameResult.textContent = "It's a tie!";
        }
        makeChoice.textContent = "Game Over";
        playerScore = 0;
        computerScore = 0;
        i=1;
    }
}
playerSelection.forEach((button) => {
    button.addEventListener("click", () => {
        let rounds = document.getElementById("rounds").value; 
        game(button.id,rounds);
    });
});
/* Outside bec of event listener gets added but removing it was a hassle */