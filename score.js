function Score() {
  this.score = 0;
  //functions
  this.calcScore = function(ballX, ballY, paddleX, paddleWidth, ballRadius) {

  }
  this.drawScore = function() {
    ctx.font = "16px Times";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Score: " + this.score, 10, 20);
  }
}

// function changingScore() {
//   if(y + dy > canvas.height-1) {
//     if(x > paddleX && x < paddleX + paddleWidth) {
//       score++;
//     }
//   }
// }

var score = new Score();
