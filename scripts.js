/*
media for toggling mode - on mobile pick color by tapping button
on desktop choose from list
should be ok UX i think


*/

let AIColors = [];


let historyBoard = document.querySelector("#historyBoard");
let AIChoiceField = document.querySelector("#AIchoice");
let userChoiceField = document.querySelector("#userChoice");

for(let i=1;i<11;i++){
    let row = document.createElement('div');
    row.className = "rowInBoard";
    /*
    for(let j=0;j<4;j++){
        let tmp = document.createElement('div');
        tmp.className ="boardField";
        row.appendChild(tmp);
    }
    */
    historyBoard.appendChild(row);
}

for(let i=0;i<4; i++){
    let aSelector = document.createElement("button")
    aSelector.className="userSelector"
    aSelector.id=i;
    userChoiceField.appendChild(aSelector);
}




//Functions

function pickRandomColor(){
    return Math.floor(Math.random()*6);
}

function AIchooseColors(){
    for(let i=0;i<4;i++){
        AIColors.push(pickRandomColor());
    }
}
function resetGame(){
    
}

function startGame(){
    resetGame();
    AIchooseColors();
}