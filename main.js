var mouseEvent="";
var last_position_of_x,last_position_of_y;
var canvas = document.getElementById("myCanvas");
var CTX =canvas.getContext("2d");
var color="black"
var width_of_line=1;
var screen_width=screen.width;
var screen_new_width=screen.width-70;
var screen_new_height=screen.height-300;

if(screen_width<992){
    document.getElementById("myCanvas").width=screen_new_width;
    document.getElementById("myCanvas").height=screen_new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",ts);
function ts(e){
    color=document.getElementById("colorText").value;
    width_of_line=document.getElementById("WidthText").value;
    mouseEvent="touchstart";
    console.log(mouseEvent)
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e){
    var current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    var current_position_of_y=e.touches[0].clientY-canvas.offsetTop;

        CTX.beginPath();
        CTX.strokeStyle=color;
        CTX.lineWidth=width_of_line;
        CTX.moveTo(last_position_of_x,last_position_of_y);
        CTX.lineTo(current_position_of_x,current_position_of_y)
        CTX.stroke();

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

}


function clear_area(){
    CTX.clearRect(0,0,canvas.width,canvas.height);
    
}



