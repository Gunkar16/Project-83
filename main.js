var mouseEvent="";
var last_position_of_x,last_position_of_y;
var canvas = document.getElementById("myCanvas");
var CTX =canvas.getContext("2d");
var color="black"
var width_of_line=1;
var screen_width=screen.width;
var screen_new_width=screen.width-70;
var screen_new_height=screen.height-300;
var radius;

if(screen_width<992){
    document.getElementById("myCanvas").width=screen_new_width;
    document.getElementById("myCanvas").height=screen_new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",ts);
function ts(e){
    color=document.getElementById("colorText").value;
    width_of_line=document.getElementById("WidthText").value;
    radius=document.getElementById("R").value;

    console.log(mouseEvent)
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    CTX.beginPath();
    CTX.strokeStyle=color;
    CTX.lineWidth=width_of_line;
    CTX.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI)
    CTX.stroke();
}
canvas.addEventListener("touchmove",tm);
function tm(e){
    var current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    var current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

        CTX.beginPath();

        CTX.moveTo(last_position_of_x,last_position_of_y);
        CTX.lineTo(current_position_of_x,current_position_of_y)
        CTX.stroke();

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
    console.log("mousemove")
}
canvas.addEventListener("mousedown",md);
function md(e){
    color=document.getElementById("colorText").value;
    width_of_line=document.getElementById("WidthText").value;
    mouseEvent="mousedown";
    console.log(mouseEvent)
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    var current_position_of_x=e.clientX-canvas.offsetLeft;
    var current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        CTX.beginPath();
        CTX.strokeStyle=color;
        CTX.lineWidth=width_of_line;
        CTX.moveTo(last_position_of_x,last_position_of_y);
        CTX.lineTo(current_position_of_x,current_position_of_y)
        CTX.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
    console.log("mousemove")
}
canvas.addEventListener("mouseup",mu);
function mu(e){
    mouseEvent="mouseup";
    console.log(mouseEvent)

}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent)

}





