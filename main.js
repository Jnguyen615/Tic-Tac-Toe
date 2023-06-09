var boxes = document.querySelectorAll('.boxes');
console.log('boxes:', boxes)
var message = document.getElementById('whose-turn');
console.log(message)


//on click check player turn - always player1 first
//render innterhtml with the correct players token
//call check wins function 
//logic checking win combo's 
//if it matches one of the array 
// innertext who won
//update win on data model/show on dom 

var player1;
var player2;
var playersTurn = player1
var gameOver = false; 

// boxes.addEventListener('click', function(){});
window.addEventListener('load', function() {
  player1 = createPlayer('player1', '🌺', 0);
  player2 = createPlayer('player2', '🍄', 0);
  console.log('player1:', player1)
  console.log('player2', player2)
  updatePlayerTurnText()
})

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(event) {
    checkPlayerTurn()
  })
}
// var currentPlayer = createPlayer(player, token, wins {
//   player: player,
//   token: token,
//   wins: wins 
// })

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
function createPlayer(name, token, wins) {
  return {
    name: name,
    token: token,
    wins: wins
  }
}


function updatePlayerTurnText() {
  if (playersTurn === player2) {
      message.innerText = `It\'s player ${player2.token}\'s turn!`
  } else {
      message.innerText = `It\'s player ${player1.token}\'s turn!`
  }
}
  
  

