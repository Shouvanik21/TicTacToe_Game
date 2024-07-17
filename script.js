//selecting all required buttons
const selectBox=document.querySelector(".select-box"),
selectXBtn=selectBox.querySelector(".playerX"),
selectOBtn=selectBox.querySelector(".playerO"),
playBoard=document.querySelector(".play-board"),
allBox=document.querySelectorAll("section span"),
players=document.querySelector(".players");


window.onload=()=>{//once window loads
    for(let i=0;i<allBox.length;i++){//add on click attribute in all section's span
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }
    selectXBtn.onclick=()=>{
        selectBox.classList.add("hide");//hide the select box on playerX button clicked
        playBoard.classList.add("show");//show the playboard section when the playerX button clicked
    }
    selectOBtn.onclick=()=>{
        selectBox.classList.add("hide");//hide the select box on playerO button clicked
        playBoard.classList.add("show");//show the playboard section when the playerO button clicked
        players.setAttribute("class","players active player");
    }
}

let playerXIcon="fas fa-times",
playerOIcon="far fa-circle";

function clickedBox(element){
    // console.log(element);
    if(players.classList.contains("player")){//if player element contains .player
        element.innerHTML=`<i class="${playerOIcon}"></i>`;//adding circle icon tag
        players.classList.add("active");
    }
    else{
        element.innerHTML=`<i class="${playerXIcon}"></i>`;//adding cross icon tag
        players.classList.add("active");
    }
    element.style.pointerEvents="none";//if user selects a box then cannot be selected again
    let randomDelayTime = ((Math.random() * 1000) +200).toFixed();
    bot();
}

//bot click function
function bot(){
    let array=[];
    for(let i=0;i<allBox.length;i++){
        if(allBox[i].childElementCount==0){
            array.push(i);
            // console.log(i+" "+ "has no children");
        }
    }
    let randomBox=array[Math.floor(Math.random() * array.length)];
    console.log(randomBox);
    if(array.length>0){
        if(players.classList.contains("player")){//if player element contains .player
            allBox[randomBox].innerHTML=`<i class="${playerXIcon}"></i>`;//adding cross icon tag
            players.classList.add("active");
        }
        else{
            allBox[randomBox].innerHTML=`<i class="${playerOIcon}"></i>`;//adding circle icon tag
            players.classList.add("active");
        }
    }
    // console.log(array);
}
