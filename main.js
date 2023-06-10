//Query Selectors
var boxes = document.querySelectorAll('.boxes');
var message = document.getElementById('whose-turn');
var board = document.querySelector('.grid-container')
var player1Wins = document.getElementById('#player-one-wins');
var player2Wins = document.getElementById('#player-two-wins');

//Global Variables
var playerStart;
var player1 = createPlayer('player1', '🌺', 0);
var player2 = createPlayer('player2', '🍄', 0);
var gameBoard = ['', '', '', '', '', '', '', '', '']
var currentPlayer = player1
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
  updatePlayerTurnText()
  checkWin(event)
  checkDraw()
  switchPlayer()
  //checkDraw 
})

//Funcitons 
function createPlayer(name, token) {
  return {
    name: name,
    token: token,
    wins: 0,
    turn: true || false, 
    moves: ['', '', '', '', '', '', '', '', '']
  }
}

function showBoard() {
  board.innerHTML = ''
  for (var i = 0; i < gameBoard.length; i++) {
    board.innerHTML += `<section class="boxes" id="${i}"> 
    <p> ${gameBoard[i]} </p> </section>`
  }
}  

function placeToken(event) {
  var clickedBox = parseInt(event.target.closest('section').id);
  if (gameBoard[clickedBox] === '') {
    gameBoard[clickedBox] = currentPlayer.token 
    currentPlayer.moves[clickedBox] = currentPlayer.token
    console.log('CP:', currentPlayer)
  }
  showBoard()
 } 

function updatePlayerTurnText(event) {
  if (currentPlayer === player1) {
    message.innerText = `It's player ${player1.token}'s turn!`
  } else {
    message.innerText =  `It's player ${player2.token}'s turn!`
  }
}

function switchPlayer() {
  currentPlayer = (currentPlayer === player1) ? player2 : player1
}

function checkWin(event) {
  var newIndexArray = []
  for (var i = 0; i <= currentPlayer.moves.length; i++){
    console.log('newindex:', newIndexArray)
    if (currentPlayer.moves[i] !== '') {
      newIndexArray.push(i)
    }
  }
  for (var i = 0; i < winCombos.length; i++) {
    if (winCombos[i].every(v => newIndexArray.includes(v))) {
      console.log('winner', winCombos[i].every(v => newIndexArray.includes(v)))
      message.innerText = `${currentPlayer.token} wins the game!`
    } 
  }
}



