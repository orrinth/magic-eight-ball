const ball = document.querySelector(".ball");
const eight = document.querySelector(".eight");
const num = document.querySelector(".eight span");
const reply = document.querySelector(".reply");
const replyspan = document.querySelector(".reply span");

const start = document.querySelector("#start");
const h1 = document.querySelector("h1");
const askBtn = document.querySelector("#ask");
const againBtn = document.querySelector("#again");
const homeBtn = document.querySelector("#home-page");

const answers = ["Yes", "No", "Maybe", "Of course", 
                "Don't know", "Try later", 
                "Not sure", "Of course not"];
let randomNum;

const c = document.querySelector("canvas").getContext("2d");

function makeTriangle() {
    c.strokeStyle = "white";
    c.lineWidth = 4;
    c.beginPath();
    c.lineTo(135, 0);
    c.lineTo(67.5, 135);
    c.lineTo(0, 0);
    c.closePath();
    c.stroke();

    c.fillStyle = "rgb(28,27,27)";
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(67.5, 135);
    c.lineTo(0, 135);
    c.fill();

    c.fillStyle = "rgb(28,27,27)";
    c.beginPath();
    c.moveTo(135, 0);
    c.lineTo(67.5, 135);
    c.lineTo(135, 135);
    c.fill();
}

function startEightBall() {
    start.style.opacity = "0";
    start.style.cursor = "default";
    start.style.transform = "scale(1) translateY(1000%)";
    start.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";

    h1.style.opacity = "0";
    h1.style.transform = "translateY(-1000%)";
    h1.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";
    
    askBtn.style.opacity = "1";
    askBtn.style.transform = "translateY(0%)";
    askBtn.style.transition = "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out";

    homeBtn.style.opacity = "1";
    homeBtn.style.transform = "translateY(0%)";
    homeBtn.style.transition = "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out";
}

function ask() {
    randomNum = Math.floor(Math.random() * 8);
    
    eight.style.opacity = "0";
    eight.style.transition = "opacity 0.5s ease-out";

    reply.style.opacity = "1";
    reply.style.transition = "opacity 0.5s ease-out";
    
    replyspan.textContent = answers[randomNum];
    
    askBtn.style.opacity = "0";
    askBtn.style.transform = "translateY(-2000%)";
    askBtn.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";

    againBtn.style.opacity = "1";
    againBtn.style.transform = "translateY(0%)";
    againBtn.style.transition = "opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.5s";
}

function again() {
    eight.style.opacity = "1";
    eight.style.transition = "opacity 0.5s ease-out";

    reply.style.opacity = "0";
    reply.style.transition = "opacity 0.5s ease-out";

    askBtn.style.opacity = "1";
    askBtn.style.transform = "translateY(0%)";
    askBtn.style.transition = "opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.5s";

    againBtn.style.opacity = "0";
    againBtn.style.transform = "translateY(-2000%)";
    againBtn.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";
}

function goHome() {
    start.style.opacity = "1";
    start.style.cursor = "pointer";
    start.style.transform = "scale(1) translateY(0%)";
    start.style.transition = "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out";

    h1.style.opacity = "1";
    h1.style.transform = "translateY(0%)";
    h1.style.transition = "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out";

    askBtn.style.opacity = "0";
    askBtn.style.transform = "translateY(-2000%)";
    askBtn.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";

    againBtn.style.opacity = "0";
    againBtn.style.transform = "translateY(-2000%)";
    againBtn.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";

    homeBtn.style.opacity = "0";
    homeBtn.style.transform = "translateY(2000%)";
    homeBtn.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out 0.2s";
    
    eight.style.opacity = "1";
    eight.style.transition = "opacity 0.5s ease-out";

    reply.style.opacity = "0";
    reply.style.transition = "opacity 0.5s ease-out";
}

makeTriangle();
start.addEventListener("click", startEightBall);
askBtn.addEventListener("click", ask);
againBtn.addEventListener("click", again);
homeBtn.addEventListener("click", goHome);
