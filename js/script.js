// Wywałanie funkcji computerMove

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
  }
else if (randomNumber == 3){
    computerMove = 'nozyce';
  }

printMessage('Mój ruch to: ' + computerMove);

// Wywałanie funkcji playerMove

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nozyce';
  }

printMessage('Twój ruch to: ' + playerMove);

// Wywałanie funkcji wynik

//Kamien
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
else if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Ja wygrywam!');
  }

//Papier
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
else if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }

//Nozyce
  else if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
  }
else if( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!');
  }

//Nieznany ruch
else if(playerMove == 'nieznany ruch'){
    printMessage('Wykonałeś nieznany ruch!');
  } 