/**
 * Created by yyq on 2018/3/2.
 */

window.onload=function() {
    var canvas = document.getElementById("canvas");

    canvas.width =600;
    canvas.height =600;

    var context = canvas.getContext("2d");
    context.fillStyle="black";
    context.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<200;i++) {
        var r=Math.random()*10+10;
        var x=Math.random()*canvas.width;
        var y=Math.random()*canvas.height;
        var a=Math.random()*360;
        drawStar(context, x, y, r, r/2.0, a);
    }
};
function drawStar(cxt,x,y,outerR,innerR,rot) {
    cxt.beginPath();
    for (var i = 0; i < 10; i++) {
        cxt.lineTo(Math.cos((18 + i * 72-rot) / 180 * Math.PI) * outerR + x,
            -Math.sin((18 + i * 72-rot) / 180 * Math.PI) * outerR + y);
        cxt.lineTo(Math.cos((54 + i * 72-rot) / 180 * Math.PI) * innerR + x,
            -Math.sin((54 + i * 72-rot) / 180 * Math.PI) * innerR + y);
    }
    cxt.fillStyle="#fb2";
    cxt.strokeStyle="#fd5";
    cxt.closePath();
    cxt.stroke();
    cxt.fill();
}

