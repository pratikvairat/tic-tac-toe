let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winner = document.querySelector(".winner-text");
let popup = document.querySelector(".popup");
let newGame = document.querySelector(".new-btn");
let currStatus = document.querySelector(".status");
let winnerMusic = document.querySelector(".winner-music");
let turnText = document.querySelector(".turn-text");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            turnText.innerText="";
            turnText.innerText="X turn";
            box.innerText = "O";
            turnO = false;
        } else {
            turnText.innerText="";
            turnText.innerText="O turn";
            box.innerText = "X";
            turnO = true;
        }
        count = count + 1;
        box.disabled = true;
        console.log(count);
        checkWinner();


    })
})

newGame.addEventListener("click", () => {
    popup.style.display = "none";

    resetGame();
})

const resetGame = () => {
    boxes.forEach((box) => {
        turnText.innerText="O turn";
        count = 0;
        box.innerText = "";
        box.disabled = false;
    })
}



resetBtn.addEventListener("click", () => {
    resetGame();
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        if (
            boxes[pattern[0]].innerText === "X" &&
            boxes[pattern[1]].innerText === "X" &&
            boxes[pattern[2]].innerText === "X"
        ) { 
            currStatus.innerText = "";
            currStatus.innerText = "🎉 Congrats 🎉";
            winner.innerText = "X wins 😊";
            popup.style.display = "block";
            count=0;
            winnerMusic.play();

        } else

            if (
                boxes[pattern[0]].innerText === "O" &&
                boxes[pattern[1]].innerText === "O" &&
                boxes[pattern[2]].innerText === "O"
            ) { 
                currStatus.innerText = "";
                currStatus.innerText = "🎉 Congrats 🎉";
                winner.innerText = "O wins 😊";
                popup.style.display = "block";
                count=0;
                winnerMusic.play();

            } else if (count === 9) {
                console.log("It is draw");
                currStatus.innerText = "";
                currStatus.innerText = "😌 Draw...";
                winner.innerText = "Draw";
                popup.style.display = "block";
                winnerMusic.play();
            }

    }
}