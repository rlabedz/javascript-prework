{
  const getMoveName = function(argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
    } else if (argMoveId == 2) {
    return 'papier';
    } else if (argMoveId == 3) {
    return 'nozyce';
    } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieodpowiedni ruch';
    }
  }      
    
  const displayResult = function(argComputerMove, argPlayerMove) {
    clearMessages();
    printMessage('Zagrałem ' + argComputerMove + ', Ty wybrałeś ' + argPlayerMove + '.');
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
      printMessage('Wygrywasz!');
      } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
      printMessage('Wygrywasz!');
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
      printMessage('Przegrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
      } else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
      } else if (argComputerMove == argPlayerMove){
      printMessage('Remis!');
      } else {
      printMessage('Gra nierozsrzygnięta');
      }
    } 
    
  const playGame = function(playerInput) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
  }
    
  document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
  document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
  document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
}