/**
 * Created by user on 11.03.2017.
 */

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

var timeId = 1;

function Fox() {
    clearTimeout(timeId);
    console.log(timeId);

    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var maxw = w - 150;
    var maxh = h - 150;
    var rw = randomInteger(0 , maxw);
    var rh = randomInteger(0 , maxh);
    var ch = document.getElementById('fox').getBoundingClientRect().top;
    var cw = document.getElementById('fox').getBoundingClientRect().left;

    //вычислим время выполнения движения
    var sec = Math.sqrt(Math.pow((ch - rh) , 2) +  Math.pow((cw - rw) , 2));
    sec = (sec / 2200) * 2.5;
    sec = Math.floor(sec * 100) / 100;

    if (rw - cw < 0)
        document.getElementById('fox').style.transform = 'scaleX(1)';
    else
        document.getElementById('fox').style.transform = 'scaleX(-1)';

    document.getElementById('fox').style.top = String(rh) + 'px';
    document.getElementById('fox').style.left = String(rw) + 'px';
    document.getElementById('fox').style.transitionDuration = String(sec) + 's';

    Run();

    timeId = setTimeout(Stop, sec * 1000);
    console.log(timeId);

}

function Run() {
    document.getElementById('img').style.background = 'url("img/lisa.gif") no-repeat';
    document.getElementById('img').style.backgroundSize = '150px 138px';
}

function Stop() {
    document.getElementById('img').style.background = 'url("img/lisa.png") no-repeat';
    document.getElementById('img').style.backgroundSize = '150px 138px';

}

function Catch() {
    document.getElementById('CATCH').style.top = document.getElementById('fox').getBoundingClientRect().top + 'px';
    document.getElementById('CATCH').style.left = document.getElementById('fox').getBoundingClientRect().left + 'px';

    document.getElementById('fox').style.top = document.getElementById('fox').getBoundingClientRect().top + 'px';
    document.getElementById('fox').style.left = document.getElementById('fox').getBoundingClientRect().left + 'px';

    document.getElementById('fox').style.display = 'none';
    document.getElementById('CATCH').style.display = 'block';
}

function Free() {
    document.getElementById('fox').style.display = 'block';
    document.getElementById('CATCH').style.display = 'none';
}