let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  currentPlayer: "X",

  player1Name: "",

  player2Name: "",

  gamnestatus: ["Playing", "Finished"],
};

const board = document.querySelector("#board");

// switches from player X to player O

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

// loops through the board to update the gamestate.board with correct X and O positions

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currentDiv = +document.getElementById(`${i}`);
    currentDiv.innerText = gameState.board[i][i];
  }
}

// row check
function rowCheck(rowIndex) {
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[rowIndex][i] === "X") {
      alert(`${player1Name} is victorious.`);
    } else if (gameState.board[rowIndex][i] === "0") {
      alert(`${player2Name} is victorious.`);
    }
  }
}

// column check
function colCheck(colIndex) {
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[i][colIndex] === "X") {
      alert(`${player1Name} is victorious.`);
    } else if (gameState.board[i][colIndex] === "O") {
      alert(`${player2Name} is victorious.`);
    }
  }
}

// diagonal up check
function diagUpCheck() {
  for (let i = 0; i < gameState.board.length; i--) {
    if (gameState.board[i][i] === "X") {
      alert(`${gameState.player1Name} is victorious.`);
    } else if (gameState.board[i][i] === "O") {
      alert(`${gameState.player2Name} is victorious.`);
    }
  }
}

// diagonal down check
function diagDownCheck() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[i][i] === "X") {
      alert(`${gameState.player1Name} is victorious.`);
    } else if (gameState.board[i][i] === "O") {
      alert(`${gameState.player2Name} is victorious.`);
    }
  }
}

// one turn

function takeTurn() {
  renderBoard();
  switchPlayer();
  diagUpCheck();
  diagDownCheck();
  colCheck();
  rowCheck();
}

// EVENT LISTENERS

// start button listener

startbtn.addEventListener("click", function (event) {
  let inputP1 = document.getElementById("player1").value;
  let inputP2 = document.getElementById("player2").value;
  gameState.player1Name = inputP1;
  gameState.player2Name = inputP2;
});

// Places an X and switches to O, or vice versa, and notifies the player whose turn it is next.

board.addEventListener("click", function (event) {
  // console.log(event.target.id);
  event.target.innerText = gameState.currentPlayer;
  if (gameState.currentPlayer === "X") {
    alert(`It's ${gameState.player2Name}'s turn next.`);
    takeTurn();
  } else {
    alert(`It's ${gameState.player1Name}'s turn next.`);
    takeTurn();
  }
});
