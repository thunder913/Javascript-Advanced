function solve() {
    let table = document.querySelector('table');
    let divCheck = document.querySelector('#check p');
    let tableRows = document.querySelectorAll('tr');
    let inputs = document.querySelectorAll('table input');
    tableRows = Array.from(tableRows).splice(2,5);
    //Our sudomu array
    let sudokuBoard = new Array(['','',''], ['','',''], ['','','']);
    
    //Adding listeners to inputs and buttons
    for (const input of inputs) {
        input.addEventListener('change', onChange)
    }
    document
         .querySelector('button')
         .addEventListener('click', onClickCheck);

    document
        .querySelectorAll('button')[1]
        .addEventListener('click', onClickClear);

        //When clear is clicked
    function onClickClear()
    {
        //Remove text from the sudomuBoard
        for (let row = 0; row < sudokuBoard.length; row++) {
            for (let col = 0; col < sudokuBoard.length; col++) {
                sudokuBoard[row][col] = '';
            }
        }
        //Remove text from inputs
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        //Remove the style and text
        divCheck.textContent = '';
        table.style.border = 'none';

    }

    function onChange(e)
    {   
        //Getting the target row and col (row - 1, because it starts from 1)
        let target = e.target;
        let col = target.parentNode.cellIndex;
        let row = target.parentNode.parentNode.rowIndex - 1;
        
        //Adding value to sudomu
        let value = this.value;
        sudokuBoard[row][col] = value;
    }


    function onClickCheck()
    {
        let correct = true;
        //Check if any of the positions are empty, if so we break
        for (let i = 0; i < sudokuBoard.length; i++) {
            if (sudokuBoard[i].includes('')) {
                correct = false;
                break;
            }
        }
        //Check if any of the position are not between 1 and 3
        for (let row = 0; row < sudokuBoard.length; row++) {
            for (let col = 0; col < sudokuBoard.length; col++) {
                const element = sudokuBoard[row][col];
                if (element > 3 || element < 1) {
                    correct =false;
                    break;
                }
            }
            
        }
        //If the top checks are true then we check if the numbers are different
        if(correct)
        {
        for (let i = 0; i < sudokuBoard.length; i++) {
            let setRow = new Set([sudokuBoard[i][0], sudokuBoard[i][1], sudokuBoard[i][2]]);
            if (setRow.size !== 3) {
                correct = false;
                break;
            }
            let setCol = new Set([sudokuBoard[0][i], sudokuBoard[1][i], sudokuBoard[2][i]]);
            if (setCol.size !== 3) {
                correct = false;
                break;
            }
        }
    }
        
        if (correct) {
            table.style.border = '2px solid green';
            divCheck.textContent= 'You solve it! Congratulations!';
            divCheck.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            divCheck.textContent= 'NOP! You are not done yet...';
            divCheck.style.color = 'red';
        }
    }
}