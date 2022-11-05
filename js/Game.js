export default class Game {
    constructor() {
        this.turn = "X";
        this.turnCount = 0;
        this.nextBoard = null; //keeps track which mini the next move can be played. set to null as initial move can be anywhere
        this.board = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]
          ];
        this.bigBoard = [false, false, false, false, false, false, false, false, false]; //records the status of each small board
        this.possession = [null, null, null, null, null, null, null, null, null]; //records who has what board or if a tie exists on a small board
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X"; //alternates turns

    }
    makeMove(i, j) {
        if (!this.isInProgress()) { //prevents moves being made once game is done
            return;
        }
        if (this.turnCount != 0 && i != this.nextBoard) { //makes sure moves aren't made on the wrong small boards when it is not the initial turn
            return;
        }
        if (this.bigBoard[i]) { //prevents moves being made in small boards
            return;
        }
        if (this.board[i][j]) { //prevents moves being made on claimed tiles
            return;
        }
        console.log(this.bigBoard[i]);
        this.board[i][j] = this.turn; //makes move
        this.nextBoard = this.findNextBoard(j); //sets the next board the move can be made
        this.turnCount++;
        this.findWinningComboS(i);
        this.findTies(i);
        if (!this.findWinningComboL()) { //continues the game if no wins
            this.nextTurn();
        }
    }

    findNextBoard(i) { 
        if(!this.bigBoard[i]) { //returns the small board given a legal move can be played on it
            return i;
        }
        if (i == 8) { //if the small board on the end is claimed and it is directed to, the function cycles to the beginning
            return this.findNextBoard(0);
        }
        return this.findNextBoard(parseInt(i) + 1); //covers the case where multiple boards in a row are taken
    }
    findWinningComboS(i) { //searches for wins on the small boards
        const winningCombinations = [ //stores the winning index combos
            [0, 1, 2], //horizontal wins
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], //vertical wins
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], //diagonal wins
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[i][a] && (this.board[i][a] === this.board[i][b] && this.board[i][a] === this.board[i][c])) { //checks that all coords are equal and also not null
                this.possession[i] = this.turn;
                this.bigBoard[i] = true;
                return combination;
            }
        }
        return null;
    }

    findTies(i) { //checks if there exists a tie on the small board
        let hasTie = true;
        for (let j = 0; j < 9; j++) {
            if (!this.board[i][j]) {
                hasTie = false;
            }
        }
        if (hasTie) {
            this.possession[i] = "T";
        }
    }

    findWinningComboL() { //searches for wins on the main board
        const winningCombinations = [ //stores the winning index combos
            [0, 1, 2], //horizontal wins
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], //vertical wins
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], //diagonal wins
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.possession[a] && (this.possession[a] === this.possession[b] && this.possession[a] === this.possession[c])) { //checks that all coords are equal and also not null
                return combination;
            }
        }
        return null;
    }
    isInProgress() {
        return !this.findWinningComboL() && this.bigBoard.includes(false); //checks for win and ties
    }
}