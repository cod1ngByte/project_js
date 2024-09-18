document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    const gameArena = document.querySelector(".game-arena");
    const ping = document.querySelector(".ping-pong");
    const ball = document.querySelector(".ball");

    //initial value :
    // console.log(gameArena.offsetWidth);
    // console.log(gameArena.offsetHeight);
    // console.log(ball.offsetWidth);
    // console.log(ball.offsetHeight);

    //displacement of ball in x and y direction
    let dx = 2;
    let dy = 2;

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

    let id = setInterval(() => {
        updateBallMov();
    }, 10);

    document.addEventListener("keydown", pingMovement);

    function pingMovement(e) {
        if (e.code === "ArrowUp" && pingDir.y > 0) {
            pingDir.y = pingDir.y - 10;
            draw(ping, pingDir);
        } else if (
            e.code === "ArrowDown" &&
            pingDir.y < gameArena.offsetHeight - ping.offsetHeight - 5
        ) {
            pingDir.y = pingDir.y + 10;
            draw(ping, pingDir);
        }
    }

    function draw(ele, eleDir) {
        ele.style.left = `${eleDir.x}px`;
        ele.style.top = `${eleDir.y}px`;
    }

    function updateBallMov() {
        ballDir.x = ballDir.x + dx;
        ballDir.y = ballDir.y + dy;

        draw(ball, ballDir);

        if (
            ballDir.x > gameArena.offsetWidth - ball.offsetWidth ||
            ballDir.x <= 0
        ) {
            dx = dx * -1; //changing the direction of ball in x
        }
        if (
            ballDir.y > gameArena.offsetHeight - ball.offsetHeight ||
            ballDir.y <= 0
        ) {
            dy = dy * -1; // changing the direction of ball in y
        }
    }
});
