let can = document.getElementById('canvas');
let ctx = can.getContext('2d');
let clickPositionX = -1;
let clickPositionY = -1;
let count = 0;
can.width = window.innerWidth;
can.height = window.innerHeight;
const rectangle = {
    width: 50,
    height: 50,
};
setTimeout( function(){window.location.href = "main.html"},60000);
function decreaseTime() {
    document.getElementById('time').innerHTML--;
}
setInterval(decreaseTime, 1000);
function f() {
    let x = Math.random() * 1850;
    let y = Math.random() * 700;
    function create() {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, rectangle.width, rectangle.height);
    }
    function clear(){
        ctx.fillStyle = 'white';
        ctx.fillRect(x - 1, y - 1, rectangle.width + 10, rectangle.height + 10);
    }
    create();
    can.addEventListener('click', function(e){
        clickPositionX = e.clientX;
        clickPositionY = e.clientY;
        console.log("clickPositionX " + clickPositionX);
        console.log("clickPositionY " + clickPositionY);
        console.log("x " + x);
        console.log("y " + y);
        if(clickPositionX >= x && clickPositionX <= x + 50 && clickPositionY >= y + 196 && clickPositionY <= y + 247){
            document.getElementById('counter').innerHTML++;
            clear();
            x = -100;
            y = -100;
        }
    });
    if(x != -100 && y != -100) {
        setTimeout(clear, 3000);
    }
}
setInterval(f, 3000);
console.log(count);
