canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var lastPositionX = 0;
var lastPositionY = 0;
cor = "red";
widthLine = 2;
raio = document.getElementById("raio").value;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mousedown";
    cor = document.getElementById("color").value;
    widthLine = document.getElementById("borda").value;
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    PositionX = e.clientX - canvas.offsetLeft;
    PositionY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(PositionX, PositionY);
        ctx.arc(PositionX, PositionY, raio, 0, 2 * Math.PI);
        ctx.stroke();
    }
    lastPositionX = PositionX;
    lastPositionY = PositionY;
}
