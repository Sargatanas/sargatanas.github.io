/**
 Задание 1
 **/

function Ex1() {
    var n = document.getElementById('n1').value;
    var min = 101;
    var count = 0;
    var string = '';

    var i, temp;
    for (i=1; i<=n; i++) {
        temp = Math.floor(Math.random() * 10);
        string = string + ' &#8196; ' + temp;
        if (temp < min) {
            min = temp;
            count = 1
        }
        else {
            if (temp == min) count++;
        }
    }

    if (n < 1) min = 'не существует';

    document.getElementById('output1').innerHTML = string;
    document.getElementById('min1').innerHTML = String(min);
    document.getElementById('count1').innerHTML = String(count);
}

function Ex2() {
    var n = document.getElementById('n2').value;
    var cont, n1;
    var string = '';

    n1 = n;
    cont = 0;
    while (n1 > 0) {
        cont += n1 % 10;
        n1 = Math.floor(n1 / 10);
    }

    var i, sum;
    for (i=1; i<n; i++) {
        n1 = i;
        sum = 0;
        while (n1 > 0) {
            sum += n1 % 10;
            n1 = Math.floor(n1 / 10);
        }
        if (sum == cont) {
            string = string + ' &#8196; ' + i;
        }
    }

    if (string == '') string = 'не существует';

    document.getElementById('count2').innerHTML = String(n);
    document.getElementById('output2').innerHTML = string;
}

