
// FUNKCJA playGame
{
function playGame(playerInput){

    clearMessages();

  

    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';}
        else if(argMoveId == 2){
            return 'papier';}
        else if(argMoveId == 3){
            return 'nozyce';}

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    
      

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);


        /*
        
        
        let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        */

        console.log('Gracz wpisał: ' + playerInput);

        const argPlayerMove = getMoveName(playerInput);
        

        // Funkcja wynik

        console.log('moves:', argComputerMove, argPlayerMove);
        
        function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        //Kamien
        if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Ja wygrywam!');
        }
        //Papier
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ja wygrywam!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Ty wygrywasz!');
        }
        //Nozyce
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage('Ja wygrywam!');
        }
        else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
            printMessage('Remis!');
        }
        //Nieznany ruch
        else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Wykonałeś nieznany ruch!');
        }   
    }

        // Wywołanie funkcji wyświetlania wyniku
    
        displayResult(argComputerMove, argPlayerMove);
}

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
        });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
        });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
        });
    }