let boxes = document.querySelectorAll(".box");
let turn = true;
let nbtn = document.querySelector(".nbtn");
let wmsg = document.querySelector(".msg");
let msgco = document.querySelector(".msgco");

const winmsg = (winner)=>{
    msg.innerText=`The Winner is ${winner}`;
    msgco.classList.remove("hide");

}
const drawMsg = () => {
    msg.innerText = "It's a Draw 🤝";
    msgco.classList.remove("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("btn was clicked");
        if (turn == true){
            box.style.color="#B1368B";
            box.innerText="X";
            turn=false;
        }
        else{
             box.style.color="#157CF1"
             box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
        
    });
});
const dbboxes=()=> {
    for (let box of boxes){
        box.disabled=true;
    }
}
const winPatterns = [

[0, 1, 2],

[0, 3, 6],

[0, 4, 8],

[1, 4, 7],

[2, 5, 8],

[2, 4, 6],

[3, 4, 5],

[6, 7, 8],
];
const newgame=()=>{
    turn=true;
    enablebox();
    msgco.classList.add("hide");
    };


const enablebox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const checkwinner = () => {
    let isWinner = false;

    for (let p of winPatterns) {
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                isWinner = true;
                dbboxes();
                winmsg(pos1);
                return; // stop checking
            }
        }
    }

    // ✅ DRAW CHECK
    let filledBoxes = 0;
    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });

    if (filledBoxes === 9 && !isWinner) {
        drawMsg();
    }
};

nbtn.addEventListener("click",newgame);
