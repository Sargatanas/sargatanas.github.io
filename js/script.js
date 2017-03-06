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

    if (n < 1 || n % 1 != 0) {
        min = 'не существует';
        string = '';
        count = 0;
    }

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

    if (string ='' || n < 2 || n % 1 != 0) string = 'нет';

    document.getElementById('count2').innerHTML = String(n);
    document.getElementById('output2').innerHTML = string;
}

function CountDay(y, m, d) {
    var count, i;
    count = d;
    for (i=1; i <= m; i++) {
        switch (i) {
            case 1 : count += 31; break;
            case 2 : count += 28; break;
            case 3 : count += 31; break;
            case 4 : count += 30; break;
            case 5 : count += 31; break;
            case 6 : count += 30; break;
            case 7 : count += 31; break;
            case 8 : count += 31; break;
            case 9 : count += 30; break;
            case 10 : count += 31; break;
            case 11 : count += 30; break;
        }
    }
    if (y % 4 == 0) count++;
    return count;
}

function Ex3() {
    var data = document.getElementById('n3').value;
    var d = new Date(data);
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var cur_day = new Date().getDate();
    var cur_month = new Date().getMonth();
    var cur_year = new Date().getFullYear();
    var count = 0;

    count = CountDay(year, month, day);
    if (year % 4 == 0) {
        count = 366 - count;
    }
    else {
        count = 365 - count;
    }
    count += (cur_year - year - 1) * 365 + CountDay(cur_year, cur_month, cur_day);
    for (var i=year; i<cur_year; i++) {
        if (i % 4 == 0) count++;
    }
    document.getElementById('output3').innerHTML = String(count);

}

function Ex4_f() {
    window.status = 'Определитесь с выбором';
}

function Ex4_b() {
    window.status = '';
}

function Ex5() {
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = 1;

    //*Рассчитаем количество дней в текущем месяце*//
    var n;
    switch (month) {
        case 0 || 2 || 4 || 6 || 7 || 9 || 11 : n = 31; break;
        case 3 || 5 || 8 || 10 : n = 30; break;
        case 1 : n = 28; break;
    }
    if (month == 1 && year % 4 == 0) n++;

    var d_week, string;
    var j = 1;
    for (var i=1; i <= n; i++) {
        day = i;
        d = new Date(year, month, day);
        d_week = d.getDay();
        string = 'rc' + j + d_week;
        document.getElementById(string).innerHTML = i;
        if (d_week == 0) j++;
    }
}