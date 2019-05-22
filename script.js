canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

isRun = true;


function arc(context, x, y) {
    context.beginPath();

    context.fillStyle = "rgb(103,255,40)";
    context.arc(x, y, 10, 0, Math.PI * 2, true);

    context.fill()
}

function gameDraw() {
    ctx.clearRect(0, 0, 400, 400);
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 400, 400);

    arc(ctx, arcX, arcY)
}

function paint() {
    if (!isRun) {
        return;
    }

    gameDraw();
    requestAnimationFrame(paint);
}


arcX = 200;
arcY = 20;
paint();

setInterval(function(){
    if (arcX >= 390) {
        arcX = 10;
    }
    arcX++;
}, 7);


