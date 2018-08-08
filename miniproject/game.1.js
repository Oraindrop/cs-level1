var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

// 사각형 그리기

var createRect = function(x, y, width, height, color) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    return;
}

var createArc = function(x, y, r, color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    return;
}

var rect34 = function(){
    for (var i = 1; i <= 3; i++){
        for(var j = 1; j <= 4; j++){
            createRect(i*100, j*100, 50, 50);
        }    
    }
    return;
}

var randomArc50 = function(){
    var x;
    var y;
    var r;

    for(var i = 0; i< 50; i++){
        x = Math.random() * 480;
        y = Math.random() * 520;
        r = Math.random() * 50;
        var color = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);
        sketchArc(x, y, r, color);
    }
    return;
}

var sketchRect = function(){
    var x;
    var y;
    var width;
    var height;
    var color;

    x = Math.random() * 480;
    y = Math.random() * 520;
    width = Math.random() * 100;
    height = Math.random() * 100;
    color = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);

    createRect(x,y,width,height,color);

    return;
}

var sketchArc = function(){
    var x;
    var y;
    var r;
    var color;

    x = Math.random() * 480;
    y = Math.random() * 520;
    r = Math.random() * 50;
    color = "#" + Math.floor(Math.random()*0xFFFFFF).toString(16);

    createArc(x, y, r, color);
    
    return;
}

var sketchAnimation = function(){
    var x = Math.random() * 2;
    if(Math.floor(x) === 0){
        sketchRect();
        return;
    }

    else if(Math.floor(x) === 1){
        sketchArc();
        return;
    }
}


