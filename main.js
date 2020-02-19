Paddle.prototype.listen = function() {
  window.addEventListener("keydown", keyDownHandler().bind(this.movePaddle()), false);/*=Paddle*/
  window.addEventListener("keyup", keyUpHandler().bind(this.movePaddle()), false);/*=Paddle*/
}
// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)
paddle.returnValuesPaddle();
ball.returnValuesBalls();
console.log(dropSpeed, ballX, ballRadius);

score.calcScore();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  paddle.movePaddle();
}
setInterval(draw, 1);
