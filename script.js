console.log("page loaded...")

let x = document.getElementById("myVideo"); 

function playVid(){
    x.play();
    x.muted = true;
}

function pauseVid(){
    x.pause();
}