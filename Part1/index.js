board = []

function play(clickedId){
    console.log('hit')
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    console.log(playerSpan.innerText, clickedElement)
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }
    else{
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    const topRight = board[0];
const topCenter = board[1];
const topLeft = board[2];
const middleRight = board[3];
const middleCenter = board[4];
const middleLeft = board[5];
const bottomRight = board[6];
const bottomCenter = board[7];
const bottomLeft = board[8];


//ways you can win
if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
    alert(`${topRight} is the winner`);

};
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} is the winner`);
    
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert(`${topRight} is the winner`);
    
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`${topCenter} is the winner`);
    
}
if (middleRight !== undefined && middleRight === middleCenter && middleRight=== middleLeft){
    alert(`${middleRight} is the winner`);
    
}
if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight=== bottomLeft){
    alert(`${bottomRight} is the winner`);
    
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`${topLeft} is the winner`);
    
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} is the winner`);
    
}

let boardFull = true
for(let i = 0; i < 9; i++){
    if(board[i] === undefined){
        boardFull = false;
        console.log(boardFull)
    }
   
    
}
if(boardFull === true){
    alert("Cat's Game!")
}
}





