var boxes = document.querySelectorAll('.boxes');
var hibiscusEmoji = document.querySelectorAll('.hibiscus-1', '.hibiscus-2')
var gameBoard = document.getElementById


boxes.addEventListener('click', function(){});
window.addEventListener('load', function() {
  player 1 =createPlayer(player1, '🌺', 0);
  player 2 = createPlayer(player2, '🍄', 0);
  startGame()
})

var player1Symbol = '🌺';
var player2Symbol = '🍄';
var gameOver = false; 
var currentPlayer = createPlayer(player, token, wins {
  player: player,
  token: token,
  wins: wins 
})

var winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

//Funcitons 
function createPlayer(player, token, wins) {
  return {
    player: player,
    token: token,
    wins: wins
  }
}


function startGame(currentPlayer){
  h2.innerText = 'It\'s player 🌺\'s team.'
  

}