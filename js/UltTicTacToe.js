import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));
// let firstMove = true;
//define functions
gameView.onTileCLick = function(i, j) { //reacts to user input
    game.makeMove(i, j);
    gameView.update(game);

    // for (let i = 0; i < 9; i++) {
    //     console.log(game.board[i]);
    // }
    console.log(game.bigBoard)
};

gameView.onRestartCLick = function() {
    game = new Game();
    gameView.update(game);
    gameView.resetSmallBoards(game);
};

gameView.update(game);