var canvas=document.getElementById("myCanvas");
cvg= canvas.getContext("2d")
color="pink"

canvas.addEventListener("mousedown",drawcircle)
function drawcircle(e) {
    color=document.getElementById("color").value
    mouse_x = e.clientX - canvas.offsetLeft; mouse_y = e.clientY - canvas.offsetTop;
    circle1(mouse_x,mouse_y);
}
function circle1(mouse_x,mouse_y){
  cvg.beginPath();
  cvg.stokeStyle=color;
  cvg.lineWidth=2;
  cvg.arc(mouse_x,mouse_y,40,0,2*Math.PI);
  cvg.stroke();
}
function clear() {
  cvg.canvas.clearRect(0,0,canvas.width,canvas.height)
}
