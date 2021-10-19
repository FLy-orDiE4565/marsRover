
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
nasa_array = ["moonrover2.jpg", "moonrover3.jpg", "moonrover4.jpg", "mars.jpg"];
random_number = Math.floor(Math.random()*4);
rover_width = 100;
rover_height = 90;

background_image = nasa_array[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        console.log("Up key is pressed");
        up();
    }
    if (keypressed == '40') {
        console.log("Down key is pressed");
        down();
    }
    if (keypressed == '37') {
        console.log("Left key is pressed");
        left();
    }
    if (keypressed == '39') {
        console.log("Right key is pressed");
        right();
    }
}
function up() {
    if (rover_y >= 0)
    {
        rover_y-=10;
        console.log("when up arrow is pressed = " + rover_x + "- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (rover_y <= 500)
    {
        rover_y+=10;
        console.log("when up arrow is pressed = " + rover_x + "- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (rover_x >= 0)
    {
        rover_x-=10;
        console.log("when up arrow is pressed = " + rover_x + "- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if (rover_x <= 700)
    {
        rover_x+=10;
        console.log("when up arrow is pressed = " + rover_x + "- " + rover_y);
        uploadBackground();
        uploadrover();
    }
}