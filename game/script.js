/**
 * Created by user on 11.03.2017.
 */

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

function Null() {
}

var timeId = setTimeout(Null, 0);

function Run() {
    console.log(timeId, ' ');
    clearTimeout(timeId);
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var maxw = w - 150;
    var maxh = h - 150;
    var rw = randomInteger(0 , maxw);
    var rh = randomInteger(0 , maxh);

    //вычислим время выполнения движения
    var sec = Math.sqrt(Math.pow((Number(document.getElementById('fox').style.top) - rh) , 2) +
        Math.pow((Number(document.getElementById('fox').style.left) - rw) , 2));
    sec = sec / 1000;
    sec = Math.floor(sec * 100) / 100;

    if (rw - parseInt(document.getElementById('fox').style.left) < 0)
        document.getElementById('fox').style.transform = 'scaleX(1)';
    else
        document.getElementById('fox').style.transform = 'scaleX(-1)';

    document.getElementById('fox').style.top = String(rh) + 'px';
    document.getElementById('fox').style.left = String(rw) + 'px';
    document.getElementById('fox').style.transitionDuration = String(sec) + 's';
    document.getElementById('img').style.background = 'url("img/lisa.gif") no-repeat';
    document.getElementById('img').style.backgroundSize = '150px 138px';

    timeId = setTimeout(Stop, sec * 1000);
    console.log(timeId, ' ');
}

function Stop() {
    document.getElementById('img').style.background = 'url("img/lisa.png") no-repeat';
    document.getElementById('img').style.backgroundSize = '150px 138px';
}