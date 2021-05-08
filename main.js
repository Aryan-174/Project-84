canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car1.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image(); // defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onlading this variable
    background_imgTag.src = background_image; // load image

    car1_imgTag = new Image(); // defining a variable with a new image
    car1_imgTag.onload = uploadBackground; // setting a function, onlading this variable
    car1_imgTag.src = rover_image; // load image

    car2_imgTag = new Image(); // defining a variable with a new image
    car2_imgTag.onload = uploadBackground; // setting a function, onlading this variable
    car2_imgTag.src = rover_image; // load image


}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadrover() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            car1_up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            car1_down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            car1_left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            car1_right();
            console.log("right");
        }
        if(keyPressed == '87')
        {
            car2_up();
            console.log("key w");
        }
}

