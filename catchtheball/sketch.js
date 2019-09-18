let x;
let y;
let scalar = 2 

function setup(){
    createCanvas(width, height);
}

function draw(){
    background(255);
    
    square(20,30,50);
    fill(0)
    
    square(x,y)
    if (keyPressed){
    
        if (keyCode === UP_ARROW){
        scalar *= 2.5;
        }
        if (keyCode === DOWN_ARROW){
        scalar /=2.5;
    }
}
}