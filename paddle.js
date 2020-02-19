function Paddle() {
  //Constructor
  this.paddleHeight = 10;
  this.paddleWidth = 100;
  this.paddleX = (canvas.width - this.paddleWidth) / 2;
  this.paddleY = canvas.height - this.paddleHeight;
  this.paddleSpeed = 5;
  this.rightPressed = false; //right arrow
  this.leftPressed = false; //left arrow
  //functions
  this.drawPaddle = function() {
    ctx.beginPath();
    ctx.rect(this.paddleX, this.paddleY,this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }
  this.keyDownHandler = function(e) {
    if(e.key == "ArrowRight") { this.rightPressed = true; }
    if(e.key == "ArrowLeft") { this.leftPressed = true; }
  }
  this.keyUpHandler = function(e) {
    if(e.key == "ArrowRight") { this.rightPressed = false; }
    if(e.key == "ArrowLeft") { this.leftPressed = false; }
  }
  this.movePaddle = function() {
    console.log(this.rightPressed, this.leftPressed)
    if(this.rightPressed && this.paddleX < canvas.width-this.paddleWidth) {
        this.paddleX += 4;
    }
    else if (this.leftPressed && this.paddleX > 0) {
        this.paddleX -= 4;
    }
  }
  this.returnValuesPaddle = function() {
    paddleX = this.paddleX;
    paddleWidth = this.paddleWidth;
    return paddleX, paddleWidth;
  }
}

var paddle = new Paddle();
