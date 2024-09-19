
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------",
    "---------"
]



window.onload = function() {
    setGame();
}

function setGame(){
    // Digits 1-9 + blank
    for (let i=1; i<=10; i++) {
        let number = document.createElement("div");
        number.id = i
        if (i == 10){
            number.id = ""
            number.innerText = "";
            number.addEventListener("click", selectNumber);
            number.classList.add("number");
            document.getElementById("digits").appendChild(number);
            ;
        }
        else {
            number.innerText = i;
            number.addEventListener("click", selectNumber);
            number.classList.add("number");
            document.getElementById("digits").appendChild(number);
        }
      
        

    }

    for (let r = 0; r <9; r++){
        for(let c=0; c<9; c++){
            let tile = document.createElement("div");
            tile.id=r.toString() + "-" + c.toString();
            if (board[r][c] != "-"){
                tile.innerText = board[r][c];
            }
            if (r== 2 || r ==5) {
                tile.classList.add("horizontal-line");
            }
            if (c==2 || c==5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile)
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null){
        numSelected.classList.remove("number-selected");
    }

    numSelected = this;
    numSelected.classList.add("number-selected")

}

function selectTile() {
    if (numSelected) {
        this.innerText = numSelected.id;
    }
}