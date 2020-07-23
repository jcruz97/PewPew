
let canvas = document.getElementById("projectile");
let ctx = canvas.getContext("2d");


function cannonBall (){

    ctx.beginPath();
    ctx.arc(200, 150, 110, 0, Math.PI*2)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(bepo) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bepo;
    x += dx;
    y += dy;
}

cannonBall();
draw(cannonball);