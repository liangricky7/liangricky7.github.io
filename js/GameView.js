export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class="header">
            <div class="header__turn"></div>
            <div class="header__status"></div>
            <button type="button" class="header__restart">
                Restart
            </button>
        </div>
        <div class="board">
            <div class="small__board" data-index="0">
                <div class="board__tile" data-index="0" data-big_index="0"></div>
                <div class="board__tile" data-index="1" data-big_index="0"></div>
                <div class="board__tile" data-index="2" data-big_index="0"></div>
                <div class="board__tile" data-index="3" data-big_index="0"></div>
                <div class="board__tile" data-index="4" data-big_index="0"></div>
                <div class="board__tile" data-index="5" data-big_index="0"></div>
                <div class="board__tile" data-index="6" data-big_index="0"></div>
                <div class="board__tile" data-index="7" data-big_index="0"></div>
                <div class="board__tile" data-index="8" data-big_index="0"></div>
            </div>
            <div class="small__board" data-index="1">
                <div class="board__tile" data-index="0" data-big_index="1"></div>
                <div class="board__tile" data-index="1" data-big_index="1"></div>
                <div class="board__tile" data-index="2" data-big_index="1"></div>
                <div class="board__tile" data-index="3" data-big_index="1"></div>
                <div class="board__tile" data-index="4" data-big_index="1"></div>
                <div class="board__tile" data-index="5" data-big_index="1"></div>
                <div class="board__tile" data-index="6" data-big_index="1"></div>
                <div class="board__tile" data-index="7" data-big_index="1"></div>
                <div class="board__tile" data-index="8" data-big_index="1"></div>
            </div>            
            <div class="small__board" data-index="2">
                <div class="board__tile" data-index="0" data-big_index="2"></div>
                <div class="board__tile" data-index="1" data-big_index="2"></div>
                <div class="board__tile" data-index="2" data-big_index="2"></div>
                <div class="board__tile" data-index="3" data-big_index="2"></div>
                <div class="board__tile" data-index="4" data-big_index="2"></div>
                <div class="board__tile" data-index="5" data-big_index="2"></div>
                <div class="board__tile" data-index="6" data-big_index="2"></div>
                <div class="board__tile" data-index="7" data-big_index="2"></div>
                <div class="board__tile" data-index="8" data-big_index="2"></div>
            </div> 
            <div class="small__board" data-index="3">
                <div class="board__tile" data-index="0" data-big_index="3"></div>
                <div class="board__tile" data-index="1" data-big_index="3"></div>
                <div class="board__tile" data-index="2" data-big_index="3"></div>
                <div class="board__tile" data-index="3" data-big_index="3"></div>
                <div class="board__tile" data-index="4" data-big_index="3"></div>
                <div class="board__tile" data-index="5" data-big_index="3"></div>
                <div class="board__tile" data-index="6" data-big_index="3"></div>
                <div class="board__tile" data-index="7" data-big_index="3"></div>
                <div class="board__tile" data-index="8" data-big_index="3"></div>
            </div>
            <div class="small__board" data-index="4">
                <div class="board__tile" data-index="0" data-big_index="4"></div>
                <div class="board__tile" data-index="1" data-big_index="4"></div>
                <div class="board__tile" data-index="2" data-big_index="4"></div>
                <div class="board__tile" data-index="3" data-big_index="4"></div>
                <div class="board__tile" data-index="4" data-big_index="4"></div>
                <div class="board__tile" data-index="5" data-big_index="4"></div>
                <div class="board__tile" data-index="6" data-big_index="4"></div>
                <div class="board__tile" data-index="7" data-big_index="4"></div>
                <div class="board__tile" data-index="8" data-big_index="4"></div>
            </div>
            <div class="small__board" data-index="5">
                <div class="board__tile" data-index="0" data-big_index="5"></div>
                <div class="board__tile" data-index="1" data-big_index="5"></div>
                <div class="board__tile" data-index="2" data-big_index="5"></div>
                <div class="board__tile" data-index="3" data-big_index="5"></div>
                <div class="board__tile" data-index="4" data-big_index="5"></div>
                <div class="board__tile" data-index="5" data-big_index="5"></div>
                <div class="board__tile" data-index="6" data-big_index="5"></div>
                <div class="board__tile" data-index="7" data-big_index="5"></div>
                <div class="board__tile" data-index="8" data-big_index="5"></div>
            </div>
            <div class="small__board" data-index="6">
                <div class="board__tile" data-index="0" data-big_index="6"></div>
                <div class="board__tile" data-index="1" data-big_index="6"></div>
                <div class="board__tile" data-index="2" data-big_index="6"></div>
                <div class="board__tile" data-index="3" data-big_index="6"></div>
                <div class="board__tile" data-index="4" data-big_index="6"></div>
                <div class="board__tile" data-index="5" data-big_index="6"></div>
                <div class="board__tile" data-index="6" data-big_index="6"></div>
                <div class="board__tile" data-index="7" data-big_index="6"></div>
                <div class="board__tile" data-index="8" data-big_index="6"></div>
            </div>
            <div class="small__board" data-index="7">
                <div class="board__tile" data-index="0" data-big_index="7"></div>
                <div class="board__tile" data-index="1" data-big_index="7"></div>
                <div class="board__tile" data-index="2" data-big_index="7"></div>
                <div class="board__tile" data-index="3" data-big_index="7"></div>
                <div class="board__tile" data-index="4" data-big_index="7"></div>
                <div class="board__tile" data-index="5" data-big_index="7"></div>
                <div class="board__tile" data-index="6" data-big_index="7"></div>
                <div class="board__tile" data-index="7" data-big_index="7"></div>
                <div class="board__tile" data-index="8" data-big_index="7"></div>
            </div>
            <div class="small__board" data-index="8">
                <div class="board__tile" data-index="0" data-big_index="8"></div>
                <div class="board__tile" data-index="1" data-big_index="8"></div>
                <div class="board__tile" data-index="2" data-big_index="8"></div>
                <div class="board__tile" data-index="3" data-big_index="8"></div>
                <div class="board__tile" data-index="4" data-big_index="8"></div>
                <div class="board__tile" data-index="5" data-big_index="8"></div>
                <div class="board__tile" data-index="6" data-big_index="8"></div>
                <div class="board__tile" data-index="7" data-big_index="8"></div>
                <div class="board__tile" data-index="8" data-big_index="8"></div>
            </div>
        </div>
        `
        this.lastBoard = null;
        ;

        this.onTileCLick = undefined;
        this.onRestartCLick = undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => { //gives each tile functionality
            tile.addEventListener("click", () => {
                this.onTileCLick(tile.dataset.big_index, tile.dataset.index);
            });
        });

        this.root.querySelector(".header__restart").addEventListener("click", () => { //gives the restart button functionality
            if (this.onRestartCLick) {
                this.onRestartCLick();
            };
        })
    }
    
    update(game) { //compiles all the restart functions 
        //divided to minimize confusion when debugging
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
        this.updateWins(game);
    }


    updateTurn(game) { //changes the ui for who's turn it is
        this.root.querySelector(".header__turn").textContent = `${game.turn}'s turn`;
    }

    updateStatus(game) { //changes the ui for the status of the game
        const txt = this.root.querySelector(".header__status");
        if (game.findWinningComboL()) {
            txt.textContent = `${game.turn} Wins!`;
        } else if (!game.isInProgress()) {
            txt.textContent = "It's a tie!";            
        } else {
            txt.textContent = "In Progress";
        }
    }


    updateBoard(game) { //puts the tile content on tiles
        // const winningCombination = game.findWinningCombination();
        for (let i = 0; i < game.board.length; i++) {

            if (this.lastBoard || this.lastBoard == 0) { //removes small board highlighting
                const lastBoard = this.root.querySelector(`.small__board[data-index="${this.lastBoard}"]`);
                lastBoard.classList.remove("small__board--current");
                console.log("removed")
            }
            for (let j = 0; j < game.board[i].length; j++) {
                const tile = this.root.querySelector(`.board__tile[data-index="${j}"][data-big_index="${i}"]`);

                // tile.classList.remove("board__tile--winner");
                tile.textContent = game.board[i][j];
                // if (winningCombination && winningCombination.includes[i]) { //adjusts ui if theres a win
                //     tile.classList.add("board__tile--winner");
                // }
            }
        }
        const smallBoard = this.root.querySelector(`.small__board[data-index="${game.nextBoard}"]`);
        if (!game.findWinningComboL()) { //continues to highlight if game is in session
            if (smallBoard) {
                smallBoard.classList.add("small__board--current");
            }
            this.lastBoard = game.nextBoard;
        }
    }
    updateWins(game) { //changes smallboard background of won boards
        let possessed = game.possession;
        const winningCombo = game.findWinningComboL();
        for (let i = 0; i < 9; i++) { 
            const smallBoard = this.root.querySelector(`.small__board[data-index="${i}"]`);
            smallBoard.classList.remove("small__board--win");
            if (possessed[i]) {
                if (possessed[i] === "X") {
                    console.log(possessed[i]);
                    console.log("going thru x");
                    smallBoard.classList.add("small__board--xWin");
                }
                if (possessed[i] === "T") {
                    console.log(possessed[i]);
                    console.log("going thru tie");

                    smallBoard.classList.add("small__board--tie");
                }
                if (possessed[i] === "O") {
                    console.log(possessed[i]);
                    console.log("going thru o");

                    smallBoard.classList.add("small__board--oWin");
                }
            }
        }        

    }

    resetSmallBoards(game) {
        for (let i = 0; i < 9; i++) { 
            const smallBoard = this.root.querySelector(`.small__board[data-index="${i}"]`);
            smallBoard.classList.remove("small__board--xWin");
            smallBoard.classList.remove("small__board--tie");
            smallBoard.classList.remove("small__board--oWin");
        }
    }
}
