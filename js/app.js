/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
 (the class is a property className, eg: document.getElementById('first-die').className = 'bob' )
* get the second die by ID and update the class to secondDie (hint:document.getElementById)

3) When the button is clicked, run your roll the dice function.

*/



document.getElementById('rock').onclick = () => {
  let computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay === 1) {
      computerPlay = 'rock';
    } else if (computerPlay === 2) {
      computerPlay =  'paper';
    } else {computerPlay = 'scissor';
    }


  let playerChoice = 'rock';

  let game = (playerOne, computer) => {
    if(playerOne === computer) {
      return 'Tie. Play again';
    }
    if(playerOne === 'rock'){
      if(computer === 'scissor'){
        return 'Rock beats scissors. You win';
      }
      else{
        return 'Paper beats rock. The computer wins';
      }
    }
    if(playerOne === 'scissor'){
      if(computer === 'rock'){
        return 'Rock beats scissor. The computer wins';
      }
      else{
        return 'Scissor beats paper. You win';
      }
    }
    if(playerOne === 'paper'){
      if (computer === 'rock'){
        return 'Paper beats rock. You win'
      } else {
        return 'Scissor beats paper. The computer wins'
      }
    }
  }

document.write(game('paper', computerPlay));;


}





document.getElementById('paper').onclick = () => {
  let computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay === 1) {
      computerPlay = 'rock';
    } else if (computerPlay === 2) {
      computerPlay =  'paper';
    } else {computerPlay = 'scissor';
    }


  let playerChoice = 'rock';

  let game = (playerOne, computer) => {
    if(playerOne === computer) {
      return 'Tie. Play again';
    }
    if(playerOne === 'rock'){
      if(computer === 'scissor'){
        return 'Rock beats scissors. Player one wins';
      }
      else{
        return 'Paper beats rock. The computer wins';
      }
    }
    if(playerOne === 'scissor'){
      if(computer === 'rock'){
        return 'Rock beats scissor. The computer wins';
      }
      else{
        return 'Scissor beats paper. Player one wins';
      }
    }
    if(playerOne === 'paper'){
      if (computer === 'rock'){
        return 'Paper beats rock. Player one wins'
      } else {
        return 'Scissor beats paper. The computer wins'
      }
    }
  }
  document.write(game('paper', computerPlay));

}

document.getElementById('scissor').onclick = () => {
  let computerPlay = Math.floor(Math.random() * 3) + 1;
    if (computerPlay === 1) {
      computerPlay = 'rock';
    } else if (computerPlay === 2) {
      computerPlay =  'paper';
    } else {computerPlay = 'scissor';
    }


  let playerChoice = 'rock';

  let game = (playerOne, computer) => {
    if(playerOne === computer) {
      return 'Tie. Play again';
    }
    if(playerOne === 'rock'){
      if(computer === 'scissor'){
        return 'Rock beats scissors. Player one wins';
      }
      else{
        return 'Paper beats rock. The computer wins';
      }
    }
    if(playerOne === 'scissor'){
      if(computer === 'rock'){
        return 'Rock beats scissor. The computer wins';
      }
      else{
        return 'Scissor beats paper. Player one wins';
      }
    }
    if(playerOne === 'paper'){
      if (computer === 'rock'){
        return 'Paper beats rock. Player one wins'
      } else {
        return 'Scissor beats paper. The computer wins'
      }
    }
  }
  document.write(game('scissor', computerPlay));

}
