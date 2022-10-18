let count=0;
const board = { 1:"",
2:"",
3:"",
4:"",
5:"",
6:"",
7:"",
8:"",
9:""
};

const resetBtn = document.querySelector('#resetBtn');
const boardCont = document.querySelector('.board');
initBoard();

const selector = "X";
let player = selector;

boardCont.addEventListener("click", function(e) {
    e.preventDefault();
    let index = e.target.getAttribute("id");
    
    if (board[index]===""){

        if (count%2!==0){
            player = "O";
        }
        board[index] = player;
        //console.log(index,board[index]);
        injectBoard(index);
        cnsl(index);
        player = "X";


    }else{

        alert("cell taken")
    }
    winCheck(count);
});


/* const toBoard = (()=>{
    const add = (index,xo)=> {
        board[index]=xo;
})(); */

function initBoard(){
    for (let i=1; i<10; i++) {
        let cell = document.createElement('button');
        cell.classList.add(`cell`);
        cell.setAttribute("id",i);
        cell.textContent = board[i];
        boardCont.appendChild(cell);
    }
}
function injectBoard(index) {
    const cell = document.getElementById(`${index}`);
    cell.textContent = board[index];

/*     for (let i=1; i<10; i++) {
        let cell = document.createElement('button');

        cell.classList.add(`cell`);

        cell.setAttribute("id",i);

        cell.textContent = board[i];
               
        boardCont.appendChild(cell);
        // console.log(`i=${i}, cell=${cell}`); 
    } */
}

function cnsl(input){
    count++;
    //console.log(input,`count:${count}`)
    return count;
}
resetBtn.addEventListener('click', () => {
    reset();
});

function reset(){
    Object.keys(board).forEach((key) => {
        board[key] = "";
        const cell = document.getElementById(`${key}`);
        cell.textContent = board[key];
      });
     
    count=0;
    console.log(board);
}

function winCheck(count){
    const player = count%2===0?"O":"X";
    const winComb=[
        (board[1]+board[2]+board[3]),
        (board[4]+board[5]+board[6]),
        (board[7]+board[8]+board[9]),
        (board[1]+board[4]+board[7]),
        (board[2]+board[5]+board[8]),
        (board[3]+board[6]+board[9]),
        (board[1]+board[5]+board[9]),
        (board[3]+board[5]+board[7])
    ]
    const check = winComb.some(el=>el==="OOO" || el==="XXX" );
    //console.log(`winComb ${winComb}: check ${check}`);
    if (check){
        alert(`Player '${player}' won!!!`)

    }
}
