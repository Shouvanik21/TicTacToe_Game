//selecting all required buttons
const selectBox=document.querySelector(".select-box"),
selectXBtn=selectBox.querySelector(".playerX"),
selectOBtn=selectBox.querySelector(".playerO"),
playBoard=document.querySelector(".play-board"),
allBox=document.querySelectorAll("section span"),
players=document.querySelector(".players"),
resultBox=document.querySelector(".result-box"),
wonText=resultBox.querySelector(".won-text"),
replayBtn=resultBox.querySelector("button");


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
        players.setAttribute("class","players active player");//adding three class names in player element
    }
}

let playerXIcon="fas fa-times"//classname of cross icon
let playerOIcon="far fa-circle";//classname of  circle icon
let playerSign="X";//suppose player will be X
let runBot=true;

//user click function
function clickedBox(element){
    // console.log(element);
    if(players.classList.contains("player")){//if player element contains .player
        playerSign="O";//if player will be O we will change the sign
        element.innerHTML=`<i class="${playerOIcon}"></i>`;//adding circle icon tag
        players.classList.add("active");
        //if player selects O then we will change player sign value to O
        playerSign="O";
        element.setAttribute("id",playerSign);
    }
    else{
        element.innerHTML=`<i class="${playerXIcon}"></i>`;//adding cross icon tag
        players.classList.add("active");
        element.setAttribute("id",playerSign);
    }
    selectWinner();//calling the winner function
    playBoard.style.pointerEvents="none";//
    element.style.pointerEvents="none";//if user selects a box then cannot be selected again
    let randomDelayTime = ((Math.random() * 1000) +200).toFixed();//generating random delay so that bot will delay randomly on select box
    // console.log(randomDelayTime);
    setTimeout(()=>{
        bot(runBot);//calling bot function
    },randomDelayTime);//passing random delay time
}

//bot click function
function bot(runBot){
    if(runBot){//if runBot is true then run the following codes
        //first change the playerSign....so if user has X value in id then bot will have O
        playerSign="O";
        let array=[];
        for(let i=0;i<allBox.length;i++){
            if(allBox[i].childElementCount==0){
                array.push(i);
            }
        }
        let randomBox=array[Math.floor(Math.random() * array.length)];
        if(array.length>0){
            if(players.classList.contains("player")){//if player element contains .player
                allBox[randomBox].innerHTML=`<i class="${playerXIcon}"></i>`;//adding cross icon tag
                players.classList.remove("active");
                //if user has O then box id value will have X
                playerSign="X";
                allBox[randomBox].setAttribute("id",playerSign);
            }
            else{
                allBox[randomBox].innerHTML=`<i class="${playerOIcon}"></i>`;//adding circle icon tag
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id",playerSign);
            }
            selectWinner();//calling the winner
        }
        // console.log(array);
        allBox[randomBox].style.pointerEvents="none";//once bot selects a box then user can't select that box
        playBoard.style.pointerEvents="auto";
        playerSign="X";//passing the X value
    }
}
//selecting the winner
function getClass(idname){
    return document.querySelector(".box-" + idname).id;//returning id name
}

function checkClass(val1,val2,val3,sign){
    if(getClass(val1)==sign && getClass(val2)==sign && getClass(val3)==sign){
        return true;
    }
}

function selectWinner(){//if anyone of the combination matches then select the winner
    if(checkClass(1,2,3,playerSign) || checkClass(4,5,6, playerSign) || checkClass(7,8,9, playerSign) || checkClass(1,4,7, playerSign) || checkClass(2,5,8, playerSign) || checkClass(3,6,9, playerSign) || checkClass(1,5,9, playerSign) || checkClass(3,5,7, playerSign)){
        console.log(playerSign+" "+"is the winner");
        //once the match is won by someone stop the bot
        runBot=false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        },700);//700ms delay
        wonText.innerHTML=`Player <p>${playerSign}</p> won the game!`;
    }
    else{
        //if match drawn
        if(getClass(1)!="" && getClass(2)!="" && getClass(3)!="" && getClass(4)!="" && getClass(5)!="" && getClass(6)!="" && getClass(7)!="" && getClass(8)!="" && getClass(9)!=""){
            runBot=false;
            bot(runBot);
            setTimeout(()=>{
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            },700);
            wonText.textContent="Match has been drawn!";
        }
    }
}

replayBtn.onclick=()=>{
    window.location.reload();
}
