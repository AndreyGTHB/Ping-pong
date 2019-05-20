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
    canvas.width = canvas.width;

    arc(ctx, x, y)
}

function paint() {
    if (!isRun) {
        return;
    }

    gameDraw();
    requestAnimationFrame(paint);
}


x = 200;
y = 20;
paint();
