

var playGrid = document.querySelectorAll('.play-grid > div');
var playerTurn = 0;
var xWinCounter = 0;
var oWinCounter = 0;
var playAgainBtn = document.querySelector('.play-again');

var squareOne = document.querySelectorAll('.play-grid > div')[0];
var squareTwo = document.querySelectorAll('.play-grid > div')[1];
var squareThree = document.querySelectorAll('.play-grid > div')[2];
var squareFour = document.querySelectorAll('.play-grid > div')[3];
var squareFive = document.querySelectorAll('.play-grid > div')[4];
var squareSix = document.querySelectorAll('.play-grid > div')[5];
var squareSeven = document.querySelectorAll('.play-grid > div')[6];
var squareEight = document.querySelectorAll('.play-grid > div')[7];
var squareNine = document.querySelectorAll('.play-grid > div')[8];



document.querySelector('.score').textContent = `${xWinCounter}  :  ${oWinCounter}`;


function playSquare(event) {


    if (document.querySelector('h2').textContent != 'X wins!' && document.querySelector('h2').textContent !== 'O wins!') {

        if (playerTurn % 2 === 0) {
            if (event.target.className == '') {
        event.target.textContent = 'X';
        event.target.classList.add('x-class');
        playerTurn++;
        document.querySelector('.player-x').classList.toggle('current-turn');
        document.querySelector('.player-o').classList.toggle('current-turn');
            }
        }
        else if (!playerTurn % 2 === 0) {
            if (event.target.className == '') {
            event.target.textContent = 'O';
            event.target.classList.add('o-class');
            playerTurn++;
            document.querySelector('.player-o').classList.toggle('current-turn');
            document.querySelector('.player-x').classList.toggle('current-turn');
            }
        }
        
        // x winning combinations
        if ((squareOne.classList == 'x-class' && squareTwo.classList == 'x-class' && squareThree.classList == 'x-class') 
            || (squareFour.classList == 'x-class' && squareFive.classList == 'x-class' && squareSix.classList == 'x-class') 
            || (squareSeven.classList == 'x-class' && squareEight.classList == 'x-class' && squareNine.classList =='x-class') 
            || (squareOne.classList == 'x-class' && squareFour.classList == 'x-class' && squareSeven.classList == 'x-class') 
            || (squareTwo.classList == 'x-class' && squareFive.classList == 'x-class' && squareEight.classList == 'x-class') 
            || (squareThree.classList == 'x-class' && squareSix.classList == 'x-class' && squareNine.classList == 'x-class') 
            || (squareOne.classList == 'x-class' && squareFive.classList == 'x-class' && squareNine.classList == 'x-class') 
            || (squareThree.classList == 'x-class' && squareFive.classList == 'x-class' && squareSeven.classList == 'x-class')) {
            
            document.querySelector('h2').textContent = 'X wins!';
            xWinCounter++;
            document.querySelector('.player-x').classList.remove('current-turn');
            document.querySelector('.player-o').classList.remove('current-turn');
            playAgainBtn.style.visibility = 'visible';
            document.querySelector('.play-grid').classList.toggle('animate__fadeInUp');

        }

        // o winning combinations
        else if ((squareOne.classList == 'o-class' && squareTwo.classList == 'o-class' && squareThree.classList == 'o-class') 
            || (squareFour.classList == 'o-class' && squareFive.classList == 'o-class' && squareSix.classList == 'o-class') 
            || (squareSeven.classList == 'o-class' && squareEight.classList == 'o-class' && squareNine.classList =='o-class') 
            || (squareOne.classList == 'o-class' && squareFour.classList == 'o-class' && squareSeven.classList == 'o-class') 
            || (squareTwo.classList == 'o-class' && squareFive.classList == 'o-class' && squareEight.classList == 'o-class') 
            || (squareThree.classList == 'o-class' && squareSix.classList == 'o-class' && squareNine.classList == 'o-class') 
            || (squareOne.classList == 'o-class' && squareFive.classList == 'o-class' && squareNine.classList == 'o-class') 
            || (squareThree.classList == 'o-class' && squareFive.classList == 'o-class' && squareSeven.classList == 'o-class')) {

            document.querySelector('h2').textContent = 'O wins!';
            oWinCounter++;
            document.querySelector('.player-x').classList.remove('current-turn');
            document.querySelector('.player-o').classList.remove('current-turn');
            playAgainBtn.style.visibility = 'visible';
            document.querySelector('.play-grid').classList.toggle('animate__fadeInUp');

        }

        // tie result
        else if (playerTurn === 9) {

            document.querySelector('h2').textContent = "Tied game.";
            document.querySelector('.player-x').classList.remove('current-turn');
            document.querySelector('.player-o').classList.remove('current-turn');
            playAgainBtn.style.visibility = 'visible';
            document.querySelector('.play-grid').classList.toggle('animate__fadeInUp');

        }
    }

    // // underline 'x' or 'o' to indicate current player's turn
    // if (document.querySelector('h2').textContent == '') {
    //     document.querySelector('.player-x').classList.toggle('current-turn');
    //     document.querySelector('.player-o').classList.toggle('current-turn');
    // }

    document.querySelector('.score').textContent = `${xWinCounter}  :  ${oWinCounter}`;

}


function playAgain() {

    // for loop to reset grid classes
    for (var i = 0; i < playGrid.length; i++) {
        document.querySelectorAll('.play-grid > div')[i].className = '';
        document.querySelectorAll('.play-grid > div')[i].textContent = '';
    }

    // reset player turn counter
    playerTurn = 0;

    // reset/remove 'player wins!' message
    document.querySelector('h2').textContent = '';

    // reset current player highlight/underline
    document.querySelector('.player-x').classList.add('current-turn');

    // hide button
    playAgainBtn.style.visibility = 'hidden';

    // toggle/re-animate grid fade
    document.querySelector('.play-grid').classList.toggle('animate__fadeInUp');

}


// add event listener for click on each grid div
for (var i = 0; i < playGrid.length; i++) {
    playGrid[i].addEventListener('click', playSquare);
}

// add event listener for click on 'play again' button
playAgainBtn.addEventListener('click', playAgain);