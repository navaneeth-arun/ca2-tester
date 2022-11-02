const gameBody=document.getElementById('bod');

const firework=new Audio('./assets/firework.mp3');
const backgroundSound = new Audio("./assets/panjabi.mp3");

backgroundSound.play();
backgroundSound.loop = true;

gameBody.onclick=()=>{
    firework.pause();
    firework.currentTime=0;
    firework.play();
}

// Setting the level to Easy by having the
// duration of the whole animation to the maximum

function easy() {
    document.getElementById('circle').style.animationDuration = '20s';
    document.getElementById('circle').className = 'crcl';
    let time=20;
    let timer=setInterval(()=> {
    document.getElementById('timer').innerText=time;
    time--;

    if (time==0) {
        gameOver(true)
    }
},1000)

function gameOver(isOver) {
    if(isOver) window.open('end.html','_self')
}
}

// Setting the level to Medium by having the
// duration of the whole animation to the maximum

function medium() {
    let time=15;
    let timer=setInterval(()=> {
    document.getElementById('timer').innerText=time;
    time--;

    if (time==0) {
        gameOver(true)
    }
},1000)

function gameOver(isOver) {
    if(isOver) window.open('end.html','_self')
}
    document.getElementById('circle').style.animationDuration = '15s';
    document.getElementById('circle').className = 'crcl';
}

// Setting the level to Hard by having the
// duration of the whole animation to the maximum

function hard() {
    let time=12;
    let timer=setInterval(()=> {
    document.getElementById('timer').innerText=time;
    time--;

    if (time==0) {
        gameOver(true)
    }
},1000)

function gameOver(isOver) {
    if(isOver) window.open('end.html','_self')
}
    document.getElementById('circle').style.animationDuration = '12s';
    document.getElementById('circle').className = 'crcl';
}

let cnt = 0;

// Function to count the number of taps
// and display the score
function count() {
    cnt = parseInt(1) + parseInt(cnt);
    var scr = document.getElementById('score');
    scr.innerHTML = cnt;
    localStorage.setItem("endScore",cnt)
}
// Restart the game by refreshing the page
function restart() {
    window.location.reload();
}

// A list of all possible colors
const COLORS = ["red", "white"];
// Defines the particle number
const PARTICLES_NUMBER = 10;

function createParticle(x, y) {
  const element = document.createElement("div");
  element.style.width = "8px";
  element.style.height = "8px";
  element.style.border = "1px solid black";
  // The elements are in absolute position
  element.style.position = "absolute";
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  // We want our cursor to be centered in the square
  element.style.transform = "translate(-50%, -50%)";
  // Get a color randomly
  element.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const animation = element.animate(
    [
      {
        // Math.random() - 0.5 returns integer between -0.5 and 0.5
        transform: `translate(${(Math.random() - 0.5) * 500}px, ${
          (Math.random() - 0.5) * 500
        }px) rotate(${Math.random() * 520}deg)`,
        // We want to reduce the opacity until 0
        opacity: 0
      }
    ],
    1500
  );

  // Remove the particle at the end of animation
  animation.finished.then(() => element.remove());

  document.body.appendChild(element);
}

document.addEventListener("click", (e) => {
  // Get the position of the cursor in the document
  const { clientX: x, clientY: y } = e;

  // Create multiple particles
  for (let i = 0; i < PARTICLES_NUMBER; i++) {
    createParticle(x, y);
  }
});

