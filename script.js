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
function getPlayerSelection(){
        let playerSelection = prompt("Enter your choice: rock, paper or scissors");
        return playerSelection.toLowerCase();
}
function playRound(playerSelection, computerSelection) {
        if(playerSelection === computerSelection){
             return "It's a tie!";
         }
        else if(playerSelection === "rock" && computerSelection === "paper"){
             return "You lose! Paper beats rock";
         }
        else if(playerSelection === "rock"  && computerSelection === "scissors"){
            return "You Win! Rock beats scissors";
        }
        else if(playerSelection === "paper" && computerSelection === "rock"){
            return "You Win! Paper beats rock";
        }
        else if(playerSelection === "paper" && computerSelection === "scissors"){
            return "You lose! Scissors beats paper";
        }
        else if(playerSelection === "scissors" && computerSelection === "rock"){
            return "You lose! Rock beats scissors";
        }
        else if(playerSelection === "scissors" && computerSelection === "paper"){
            return "You Win! Scissors beats paper";
        }
  }
function game(){
        let playerScore = 0;
        let computerScore = 0;
        for(let i = 0; i < 5; i++){
            let playerSelection = getPlayerSelection();
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            if(result.includes("Win")){
                playerScore++;
            }
            else if(result.includes("lose")){
                computerScore++;
            }
            console.log(result);
        }
        if (playerScore > computerScore){
            console.log("You won the game!");
        }
        else if(playerScore < computerScore){
            console.log("You lost the game!");
        }
        else{
            console.log("It's a tie!");
        }
    }
game();