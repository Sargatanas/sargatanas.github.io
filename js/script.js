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
        string = string + temp + ' &#8196; ';
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
        string = '&#8199;';
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
            string += ' &#8196; ' + i;
        }
    }

    if (string == '' || n < 1 || n % 1 != 0)
    {
        string = 'нет';
        n = 'данным';
    }

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
    document.getElementById('status_bar').innerHTML = 'Определитесь с выбором';
}

function Ex4_b() {
    window.status = '';
    document.getElementById('status_bar').innerHTML = '&#8199;';
}

function AddDate(str, nm, d, year) {
    var month = d.getMonth();
    var day = 1;

    //*Рассчитаем количество дней в текущем месяце*//
    var n;
    switch (month) {
        case 0 : n = 31; break;
        case 1 : n = 28; break;
        case 2 : n = 31; break;
        case 3 : n = 30; break;
        case 4 : n = 31; break;
        case 5 : n = 30; break;
        case 6 : n = 31; break;
        case 7 : n = 31; break;
        case 8 : n = 30; break;
        case 9 : n = 31; break;
        case 10 : n = 30; break;
        case 11 : n = 31; break;
    }
    if (month == 1 && year % 4 == 0) n++;

    //*Очистим таблицу*//
    var i,j, string;
    for (i=1; i<6; i++) {
        for (j=0; j<7; j++) {
            string = str + i + j;
            document.getElementById(string).innerHTML = '';
        }
    }

    //*Разместим даты в нужных ячейках*//
    var d_week;
    j = 1;
    for (i=1; i <= n; i++) {
        day = i;
        d = new Date(year, month, day);
        d_week = d.getDay();
        string = str + j + d_week;
        document.getElementById(string).innerHTML = String(i);
        if (d_week == 0) j++;
    }

    var name_month = '';
    switch (month) {
        case 0 : name_month = 'Январь'; break;
        case 1 : name_month = 'Февраль'; break;
        case 2 : name_month = 'Март'; break;
        case 3 : name_month = 'Апрель'; break;
        case 4 : name_month = 'Май'; break;
        case 5 : name_month = 'Июнь'; break;
        case 6 : name_month = 'Июль'; break;
        case 7 : name_month = 'Август'; break;
        case 8 : name_month = 'Сентябрь'; break;
        case 9 : name_month = 'Октябрь'; break;
        case 10 : name_month = 'Ноябрь'; break;
        case 11 : name_month = 'Декабрь'; break;
    }

    name_month += ' ' + year;

    document.getElementById(nm).innerHTML = name_month;
}

function Ex5() {
    var d = new Date();
    var year = d.getFullYear();
    AddDate('rc', 'name_month', d, year);
}

function Ex6() {
    var d = new Date();
    var year = d.getFullYear();
    AddDate('rcn', 'name_month_n', d, year);
}

function Ex6_p() {
    var d = new Date();
    var year = d.getFullYear() - 1;
    AddDate('rcn', 'name_month_n', d, year);
}

function Ex6_n() {
    var d = new Date();
    var year = d.getFullYear() + 1;
    AddDate('rcn', 'name_month_n', d, year);
}

function Ex5_6() {
    Ex5();
    Ex6();
}

function Hidden() {
    var textarea = document.getElementById('other-field');
    if(this.checked)
        textarea.style.display = 'block';
    else
        textarea.style.display = 'none'
}

document.getElementById('check-4').onchange = Hidden;

function Ex7_1() {
    var opt = document.getElementsByName('science');
    if(this.checked)
        for (var i = 0; i < opt.length; i++)
        {
            opt[i].style.display = 'block';
        }

    else
        for (var j = 0; j < opt.length; j++)
        {
            opt[j].style.display = 'none';
        }
}

document.getElementById('check-1').onchange = Ex7_1;

function Ex7_2() {
    var opt = document.getElementsByName('creation');
    if(this.checked)
        for (var i = 0; i < opt.length; i++)
        {
            opt[i].style.display = 'block';
        }

    else
        for (var j = 0; j < opt.length; j++)
        {
            opt[j].style.display = 'none';
        }
}

document.getElementById('check-2').onchange = Ex7_2;

function Ex7_3() {
    var opt = document.getElementsByName('sport');
    if(this.checked)
        for (var i = 0; i < opt.length; i++)
        {
            opt[i].style.display = 'block';
        }

    else
        for (var j = 0; j < opt.length; j++)
        {
            opt[j].style.display = 'none';
        }
}

document.getElementById('check-3').onchange = Ex7_3;

function Er() {
    var srn = document.getElementById('surname-field').value;
    var n = document.getElementById('name-field').value;
    var email = document.getElementById('email-field').value;
    var city = document.getElementById('select-field').value;
    var publication = document.getElementById('selector').value;
    var crit2 = true;

    if (srn == '')
    {
        document.getElementById('er1').innerHTML = 'Это поле обязательно для заполнения';
        document.getElementById('er1').style.color = 'red';
        document.getElementById('surname-field').style.border = '1px solid red';
        crit2 = false;
    }
    else
    {
        var crit = true;
        var length = srn.length;
        var char = srn.charCodeAt(0);
        if (char < 65 || char > 90 && char < 1040 || char >= 1066 && char <=1068 || char > 1071)
            crit = false;
        for (var i = 1; i < length; i++)
        {
            char = srn.charCodeAt(i);
            if (char < 97 || char > 122 && char < 1072 || char > 1103)
                crit = false;
        }
        if (!crit)
        {
            document.getElementById('er1').innerHTML = 'введите корректную фамилию <br>(с заглавной буквы, без небуквенных символов)';
            document.getElementById('er1').style.color = 'red';
            document.getElementById('surname-field').style.border = '1px solid red';
        }
        else
        {
            document.getElementById('er1').innerHTML = '';
            document.getElementById('er1').style.color = 'lightgray';
            document.getElementById('surname-field').style.border = '1px solid gray';
        }
    }

    if (n == '')
    {
        document.getElementById('er2').innerHTML = 'Это поле обязательно для заполнения';
        document.getElementById('er2').style.color = 'red';
        document.getElementById('name-field').style.border = '1px solid red';
        crit2 = false;
    }
    else
    {   var length1 = n.length;
        var crit1 = true;
        var char1 = n.charCodeAt(0);
        if (char1 < 65 || char1 > 90 && char1 < 1040 || char1 >= 1066 && char1 <=1068 || char1 > 1071)
            crit1 = false;
        for (var j = 1; j < length; j++)
        {
            char1 = n.charCodeAt(j);
            if (char1 < 97 || char1 > 122 && char1 < 1072 || char1 > 1103)
                crit1 = false;
        }
        if (!crit1)
        {
            document.getElementById('er2').innerHTML = 'введите корректное имя <br>(с заглавной буквы, без небуквенных символов)';
            document.getElementById('er2').style.color = 'red';
            document.getElementById('name-field').style.border = '1px solid red';
            crit2 = false;
        }
        else
        {
            document.getElementById('er2').innerHTML = '';
            document.getElementById('er2').style.color = 'lightgray';
            document.getElementById('name-field').style.border = '1px solid gray';
        }
    }

    if (email == '')
    {
        document.getElementById('er3').innerHTML = 'Это поле обязательно для заполнения';
        document.getElementById('er3').style.color = 'red';
        document.getElementById('email-field').style.border = '1px solid red';
        crit2 = false;
    }
    else
    {
        document.getElementById('er3').innerHTML = '';
        document.getElementById('er3').style.color = 'lightgray';
        document.getElementById('email-field').style.border = '1px solid gray';
    }

    if (city == '-выберите город-')
    {
        document.getElementById('er5').innerHTML = 'Выберите, пожалуйста, ваш город';
        document.getElementById('er5').style.color = 'red';
        document.getElementById('select-field').style.border = '1px solid red';
        crit2 = false;
    }
    else
    {
        document.getElementById('er5').innerHTML = '';
        document.getElementById('er5').style.color = 'lightgray';
        document.getElementById('select-field').style.border = '1px solid gray';
    }

    if (publication == '')
    {
        document.getElementById('er6').innerHTML = 'Выберите, пожалуйста, журнал или газету для подписки';
        document.getElementById('er6').style.color = 'red';
        document.getElementById('selector').style.border = '1px solid red';
        crit2 = false;
    }
    else
    {
        document.getElementById('er6').innerHTML = '';
        document.getElementById('er6').style.color = 'lightgray';
        document.getElementById('selector').style.border = '1px solid gray';
    }

    if (crit && crit1 && crit2)
        form.submit();
}

