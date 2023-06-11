//Query Selectors
var boxes = document.querySelectorAll('.boxes');
var message = document.getElementById('whose-turn');
var board = document.querySelector('.grid-container')
var player1Score = document.getElementById('player-one-wins');
var player2Score = document.getElementById('player-two-wins');


//Global Variables
var playerStart;
var player1 = createPlayer('player1', '🌺', 0);
var player2 = createPlayer('player2', '🍄', 0);
var gameBoard = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = player1 || player2;
var gameOver = false; 
var allowClick = true;
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
  showBoard(event);
});

window.addEventListener('load', function() {
  localStorage.setItem("player1Wins", JSON.stringify(player1.wins));
  localStorage.setItem("player2Wins", JSON.stringify(player2.wins));
})

board.addEventListener('click', function(event){
  if (allowClick === false) {
    return 
  }
  placeToken(event);
  if (checkWin(event)) {
    return
  } else if (checkDraw()) {
    return
  }
  switchPlayer();
  updatePlayerTurnText();
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
  board.innerHTML = '';
  for (var i = 0; i < gameBoard.length; i++) {
    board.innerHTML += `<section class="boxes" id="${i}"> 
    <p> ${gameBoard[i]} </p> </section>`
  }
}  

function placeToken(event) {
  var clickedBox = parseInt(event.target.closest('section').id);
  if (gameBoard[clickedBox] === '') {
    gameBoard[clickedBox] = currentPlayer.token;
    currentPlayer.moves[clickedBox] = currentPlayer.token;
  }
  showBoard()
 } 

function updatePlayerTurnText(event) {
  if (currentPlayer === player1) {
    message.innerText = `It's player ${player1.token}'s turn!`;
  } else {
    message.innerText =  `It's player ${player2.token}'s turn!`;
  }
}

function updatePlayerWins() {
  allowClick = false
  player1Score.innerText = `Wins: ${player1.wins}`;
  player2Score.innerText = `Wins: ${player2.wins}`;
} 

function switchPlayer() {
  currentPlayer = (currentPlayer === player1) ? player2 : player1;
}

function checkWin(event) {
  var newIndexArray = [];
  for (var i = 0; i <= currentPlayer.moves.length; i++){
    if (currentPlayer.moves[i] !== '') {
      newIndexArray.push(i);
    }
  }
  for (var i = 0; i < winCombos.length; i++) {
    if (winCombos[i].every(v => newIndexArray.includes(v))) {
      message.innerText = `${currentPlayer.token} wins the game!`;
      currentPlayer.wins++;
      updatePlayerWins();
      setTimeout(resetBoard, 4000);
      return true ;
    } 
  }
}

function checkDraw() {
  if (!gameBoard.includes('')) {
    message.innerText = "It's a draw!";
    return true;
  }
}

function resetBoard() {
  for (var i = 0; i < gameBoard.length; i++) {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  player1.moves = ['', '', '', '', '', '', '', '', ''];
  player2.moves = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  gameOver = true;
  allowClick = true;
  updatePlayerTurnText();
  showBoard();
  }
}