function solve(commands) {
    let board = new Array(new Array(false, false, false), new Array(false, false, false)
    ,new Array(false, false, false));
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let row = currentCommand[0];
        let col = currentCommand[1];
        if (CheckIfTaken(board, row,col)) 
        {
            if (i%2===0) {
                board[row][col] = 'X';
            }else
            {
                board[row][col]= 'O';
            }
        }else
        {
            commands.splice(i, 1);
            i--;
            continue;
        }
        let winner = CheckIfThereIsAWinner(board);
        if (winner !== false) {
            console.log(`Player ${winner} wins!`)
            PrintBoard(board);
            return;
        }

        if (IsBoardFull(board) && !CheckIfThereIsAWinner(board)) {
            console.log("The game ended! Nobody wins :(");
            PrintBoard(board);
            return;
        }
        
        
    }
    
    function IsBoardFull(board)
    {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === false) {
                    return false;
                }
            }
        }
        return true;
    }

    function CheckIfThereIsAWinner(board)
    {
        let hasWon = false;
        for (let row = 0; row < board.length; row++) {
            let current = board[row][0];
            if (current === false) {
                break;
            }
            for (let col = 1; col < board[row].length; col++) {
                if (current === board[row][col]) {
                    hasWon = current;
                }else
                {
                    hasWon = false;
                    break;
                }
            }
            if (hasWon !== false) {
                return hasWon;
            }
        }
    
        for (let col = 0; col < board.length; col++) {
            let current = board[0][col];
            if (current === false) {
                break;
            }
            for (let row = 1; row < board[col].length; row++) {
                if (current === board[row][col]) {
                    hasWon = current;
                }else
                {
                    hasWon = false;
                    break;
                }
            }
            if (hasWon !== false) {
                return hasWon;
            }
            }
    
        for (let row = 1; row < board.length; row++) {
            let col = row;
            let current = board[0][0];
            if (current === false) {
                break;
            }
            if (board[row][row] === current && current) {
                hasWon = current;
            }else
            {
                hasWon = false;
                break;
            }
        }
                if (hasWon !== false) {
                    return hasWon;
                }
    
        if (board[2][0] === board[1][1] && board[2][0] == board[0][2] && board[2][0] !== false) {
            return board[2][0];
        }
        return false;
    }
    
    function CheckIfTaken(board, row,col)
    {
        if (board[row][col] === false) {
            return true;
        } else {
            console.log("This place is already taken. Please choose another!");
            return false;
        }
    }
    
    function PrintBoard(input) {
        for (let i = 0; i < input.length; i++) {
            console.log(input[i].join('\t'));
        }
    }
}