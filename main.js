//Query Selectors
var boxes = document.querySelectorAll('.boxes');
console.log('boxes:', boxes)
var message = document.getElementById('whose-turn');
console.log(message)
var board = document.querySelector('.grid-container')
var player1Wins = document.getElementById('#player-one-wins');
var player2Wins = document.getElementById('#player-two-wins');

//on click check player turn - always player1 first
//render innterhtml with the correct players token
//call check wins function 
//logic checking win combo's 
//if it matches one of the array 
// innertext who won
//update win on data model/show on dom 

var player1 = createPlayer('player1', '🌺', 0);
var player2 = createPlayer('player2', '🍄', 0);
var playerStart;
var gameBoard = ['', '', '', '', '', '', '', '', '']
var currentPlayer = player1
var turn = true;
var gameOver = false; 
var winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//Event Listeners
window.addEventListener('load', function(event) {
  showBoard(event)
});


  board.addEventListener('click', function(event){
    placeToken(event)
    //checkWin
    //checkDraw 
  })


//Funcitons 
function createPlayer(name, token) {
  return {
    name: name,
    token: token,
    wins: 0,
    turn: true || false, 
    moves: []
  }
}

function showBoard() {
  board.innerHTML = ''
    for (var i = 0; i < gameBoard.length; i++) {
      board.innerHTML += `<section class="boxes" id="${i}"> 
      <p> ${gameBoard[i]} </p> </section>`
      console.log(gameBoard)
  }
}  

function placeToken(event) {
  var clickedBox = parseInt(event.target.closest('section').id);
  gameBoard[clickedBox] = currentPlayer.token
  console.log('CP', currentPlayer.token)
  showBoard()
  switchPlayer()
  updatePlayerTurnText()
} 

function updatePlayerTurnText(event) {
  if (currentPlayer === player1) {
    message.innerText = `It\'s player ${player1.token}\'s turn!`
  } else {
    message.innerText =  `It\'s player ${player2.token}\'s turn!`
    console.log(currentPlayer)
  }
}

function switchPlayer() {
  console.log(currentPlayer)
  currentPlayer = (currentPlayer === player1) ? player2 : player1
  console.log('CPafter:', currentPlayer)
}


  function checkWins() {

  }

  function checkDraw() {

  }

  function updateWins() {

  }
  
  function gameReset() {
    //timeout
  }




  


