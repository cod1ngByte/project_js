document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    const gameArena = document.querySelector(".game-arena");
    const ping = document.querySelector(".ping-pong");
    const ball = document.querySelector(".ball");

    //initial value :

    let dx = 10;
    let dy = 10;

    ballDir = {
        x: 350,
        y: 225,
    };

    pingDir = {
        y: 187.5,
    };

    function draw(ele, eleDir) {
        ele.style.left = `${eleDir.x}px`;
        ele.style.top = `${eleDir.y}px`;
    }
    draw(ball, ballDir);
    draw(ping, pingDir);

    function updateBallMov() {
        if (ballDir.x >= gameArena.offsetWidth - ball.offsetWidth) {
            dx = dx * -1;
            ballDir.x = ballDir.x + dx;
        }
        if (ballDir.y >= gameArena.offsetHeight - ball.offsetHeight) {
            dy = dy * -1;
            ballDir.y = ballDir.y + dy;
        }
        if (ballDir.x <= 0) {
            dx = dx * -1;
            ballDir.x = ballDir.x + dx;
        }
        if (ballDir.y <= 0) {
            dy = dy * -1;
            ballDir.y = ballDir.y + dy;
        }
        ballDir.x = ballDir.x + dx;
        ballDir.y = ballDir.y + dy;

        draw(ball, ballDir);
    }
    // updateBallMov();
    setInterval(() => {
        updateBallMov();
    }, 500);
});
