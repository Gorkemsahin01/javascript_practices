const btnAdd= document.querySelectorAll(".btn");
const restartBtn=document.getElementById("restart");
 

let winning=[
    [0,1,2,],
    [0,3,6,],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8],
];

let xTurn=true;
let count=0;

btnAdd.forEach((element)=>{
    element.addEventListener("click", () =>{
        if(xTurn){
            xTurn=false;

            element.innerText="X"
        }
        else{
            xTurn=true;
            element.innerText="O"
            element.disabled=true;


        }
    });

});