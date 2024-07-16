//selecting all required buttons
const selectBox=document.querySelector(".select-box"),
selectXBtn=document.querySelector(".playerX"),
selectOBtn=document.querySelector(".playerO"),
playBoard=document.querySelector(".play-board"),
allBox=document.querySelectorAll("section span"),
players=document.querySelector(".players");


window.onload=()=>{//once window loads
    for(let i=0;i<allBox.clientHeight;i++){//add on click attribute in all section's span
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }
    selectXBtn.onclick=()=>{
        selectBox.classList.add("hide");//hide the select box on playerX button clicked
        playBoard.classList.add("show");//show the playboard section when the playerX button clicked
    }
    selectOBtn.onclick=()=>{
        selectBox.classList.add("hide");//hide the select box on playerO button clicked
        playBoard.classList.add("show");//show the playboard section when the playerO button clicked
        players.setAttribute("class","players active");
    }
}

let playerXIcon="fa-solid fa-xmark";
let playerYIcon="fa-regular fa-circle";

