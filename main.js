var counter = '0';

function startGame() {
    gameLoop();
}
var loops = 0;
var visiblePersons = false;
var gamePoints = 0;
function gameLoop() {
    visiblePersons = !visiblePersons;
    createCharacters();
    loops++;
    if (loops < board.children.length * 2) {
        setTimeout(gameLoop, 3000);
    }
    else {
        alert('Összpontszám: '+ gamePoints);
    }
}
function createCharacters() {
    var board = document.getElementById("board");
    var setClass = visiblePersons ? 'character visible' : 'character hidden';
    for(var index = 0; index<board.children.length; index++){
        board.children[index].className = setClass;
        board.children[index].innerHTML = "";
        board.children[index].onclick = function() {
            gamePoints-=2;
    }
    var randomNumber = Math.floor(Math.random()*6);
    board.children[randomNumber].innerHTML = "";
    board.children[randomNumber].onclick = function() {
        gamePoints+=1;
    }
    board.children[randomNumber].className = setClass + "thief";
}

}