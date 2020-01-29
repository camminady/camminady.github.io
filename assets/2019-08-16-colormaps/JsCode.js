var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis() {
    ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false,"black");
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true,"black");
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown,color) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle  = color
        ctx.lineWidth = 7
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}
	

function f(x){
    if (x<0.4){
        return x
    }else if(x<0.8){
        return 0.4
    }else{
        return 0.4+(x-0.8)*0.6/0.2
    }
}
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


function showSolution() {
    // Use the identity matrix while clearing the canvas
    var i;
    for (i = 0; i < 500; i++) {
        x = i/500.0
        y = 500.0-f(x)*500.0
        Draw(i,y,i>0,"red")
    } 
}

