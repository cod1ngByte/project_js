document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    const gameArena = document.querySelector(".game-arena");
    const ping = document.querySelector(".ping-pong");
    const ball = document.querySelector(".ball");
    let py;
    let dx;
    let dy;
    let id;

    let ballDir = {};
    let pingDir = {};

    init();

    id = setInterval(() => {
        updateBallMov();
    }, 10);

    document.addEventListener("keydown", pingMovement);

    function init() {
        //displacemtn of paddle in y direction
        py = 10;

        //displacement of ball in x and y direction
        dx = 2;
        dy = 2;

        //initial position of ball with respect to game-arena
        ballDir = {
            x: 350,
            y: 225,
        };
        //initail position of table with respect to game-arena
        pingDir = {
            y: 180,
        };

        draw(ball, ballDir);
        draw(ping, pingDir);
    }

    function draw(ele, eleDir) {
        ele.style.left = `${eleDir.x}px`;
        ele.style.top = `${eleDir.y}px`;
    }

    function updateBallMov() {
        ballDir.x = ballDir.x + dx;
        ballDir.y = ballDir.y + dy;

        draw(ball, ballDir);

        //ball collison with paddle
        if (
            ballDir.x < ping.offsetLeft + ping.offsetWidth &&
            ballDir.y > ping.offsetTop &&
            ballDir.y < ping.offsetTop + ping.offsetHeight
        ) {
            dx = dx * -1;
        }

        //changing the direction of ball in x direction with respect to game arena
        if (
            ballDir.x > gameArena.offsetWidth - ball.offsetWidth ||
            ballDir.x <= 0
        ) {
            dx = dx * -1; //changing the direction of ball in x
        }

        //changing the direction of ball in y direction with respect to game arena
        if (
            ballDir.y > gameArena.offsetHeight - ball.offsetHeight ||
            ballDir.y <= 0
        ) {
            dy = dy * -1; // changing the direction of ball in y
        }
    }

    function collision() {
        //  else {
        //     clearInterval(id);
        // }
    }

    function pingMovement(e) {
        e.preventDefault();
        if (e.code === "ArrowUp" && pingDir.y > 0) {
            pingDir.y = pingDir.y + py * -1;
            draw(ping, pingDir);
        } else if (
            e.code === "ArrowDown" &&
            pingDir.y < gameArena.offsetHeight - ping.offsetHeight - 5
        ) {
            pingDir.y = pingDir.y + py;
            draw(ping, pingDir);
        }
    }
});
