var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

//벽돌들
var bricks = [];
// 벽돌 초기화
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 4; j++){

    }
}

//동그라미 그리기
var ball = {x: w/2, y: h - 30, r: 30, dx: 2, dy: -2};

var draw = function() {
    ball.draw();
    
    //충돌 체크
    ball.check();

    //위치 재계산
    ball.relocate();
}

ball.draw = function() {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle ="#FF0000";
    ctx.fill();
    ctx.closePath();

};


ball.check = function(){
    if (this.x < 0 +  this.r || this.x > w - this.r ) {
        this.dx = -this.dx;
    }

    if (this.y < 0 + this.r || this.y > h - this.r ) {
        this.dy = -this.dy;
    }
};

ball.relocate = function(){
    this.x += this.dx;
    this.y += this.dy;
};

var id = setInterval(draw, 10);