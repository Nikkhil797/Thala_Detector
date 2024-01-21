let box = document.querySelector(".box input");
let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg h2");
let msgElement = document.getElementById("myMsg");
let play = document.getElementById("play");

let audio; 

function playMoye() {
    
    if (audio) {
        audio.pause();
        audio = null;
    }

    audio = new Audio("Moye.mp3");
    audio.play();

    
    audio.addEventListener('ended', function() {
        audio.pause();
        audio = null;
    });
}

function playThala() {
    
    if (audio) {
        audio.pause();
        audio = null;
    }

    audio = new Audio("Thala.mp3");
    audio.play();

    
    audio.addEventListener('ended', function() {
        audio.pause();
        audio = null;
    });
}

btn.addEventListener("click",()=>{
    let boxVal = box.value;
    const digitSum = boxVal.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);

    if (digitSum === 7 ) {
        let outputString = "";
        for (let i = 0; i < boxVal.length; i++) {
            outputString += boxVal[i].toString(); 
            if (i < boxVal.length - 1) {
                outputString += ' + '; 
            }
        }
        outputString += ` = ${digitSum}`; 
        msg.innerText = ` ${outputString} : Thala for a Reason!`;
        playThala();
    }
    else if(boxVal.length%7 === 0){
        msg.innerText = `${boxVal} has ${boxVal.length} letters : Thala for a Reason!`;
        playThala();
    }
    else{
        msg.innerText = "No Thala for a Reason!"
        playMoye();
    }
    msgElement.style.display = "block";

})
