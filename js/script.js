var pauza=function()
{
fill(255, 0, 0);
rect(370, 340, 30, 30);
};

var marcin=function(randomX,y,a)
{
    fill(255, 255, 255);
    ellipse(randomX,y,a,a);
};
var paletka=function(palY, a)
{
    fill(0, 0, 0);
    rect(mouseX-a,palY, a*2, a/2);  
};

var punkty=0;
var randomX=Math.random(0,400);
var y=0;
var palY=375;
var a=40 ;
var speedX=Math.random(5);
var speedY=Math.random(5);

var odbity=function()
{
    if (randomX>mouseX-a-a/2 && randomX<mouseX+a+a/2 && palY<=y+a/2 && mouseY>=palY && mouseY<=palY+a/2 ){
        return 1;
    }
    return 0;
};

draw= function() {
    
    if (mouseY>=340 && mouseY<=370 && mouseX>=370 && mouseX<=400)
    {
        return;
    }
    
    background(255,55,255);
    pauza();
    marcin(randomX,y,a);
    if(mouseY>=palY && mouseY<=palY+a/2){
    paletka(palY,a);
    }
    // if (mouseY>=0 && mouseY<=30 && mouseX>=370 && mouseX<=400)
    // {
    //     marcin(randomX,y,a);
    // }
    randomX=randomX+speedX;
    y+=speedY;
    if(randomX>400){
        speedX=-Math.random(5,10);
        playSound((getSound("rpg/metal-clink")));
    }
    if (randomX<0){
        speedX=Math.random(5,10);
        playSound((getSound("rpg/metal-clink")));
    }
    if (odbity()){
        speedY=-Math.random(5,10);
        punkty++;
        playSound((getSound("rpg/metal-clink")));
    }
    
    if (y<0){
        speedY=Math.random(5,10);
        playSound((getSound("rpg/metal-clink")));
    }
    if (y>400){
        y=0;
        marcin(randomX,y,a);
        punkty=punkty-2;
        playSound((getSound("rpg/giant-no")));
    }
    fill(0, 0, 0);
    text(punkty,5,15);
};