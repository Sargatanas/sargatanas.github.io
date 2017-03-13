// Задание 1
function Ex1() {
    var n = document.getElementById('n1').value;
    var count = 0;
    var string = '';
    var min;

    //обработаем введенные данные на валидность
    if (n < 1 || n % 1 != 0) {
        string = 'не сгенерирована';
        min = '#';
        count = '#';
    }
    else
    {
        //считаем первый элемент
        min = Math.floor(Math.random() * 20);
        string = string + min + ' &#8196;&#8196; ';

        //накопим остальные
        var temp;
        for (var i = 1; i < n; i++) {
            temp = Math.floor(Math.random() * 20);
            string = string + temp + ' &#8196; ';
            if (temp < min) {
                min = temp;
                count = 1
            }
            else
                if (temp == min) count++;
        }
    }

    //выведем результат
    document.getElementById('output1').innerHTML = string;
    document.getElementById('min1').innerHTML = String(min);
    document.getElementById('count1').innerHTML = String(count);
}

// Задание 2
function Ex2() {
    var n = document.getElementById('n2').value;
    var string = '';

    //вычислим сумму цифр "контрольного" числа
    var cont_sum = 0;
    for (var n1 = n; n1 > 0; n1 = Math.floor(n1 / 10))
        cont_sum += n1 % 10;

    //проверим числа от  1 до n-1
    var sum;
    for (var i = 1; i < n; i++) {
        sum = 0;
        for (n1 = i; n1 > 0; n1 = Math.floor(n1 / 10))
            sum += n1 % 10;

        if (sum == cont_sum)
            string += ' &#8196; ' + i;
    }

    if (string == '' || n < 1 || n % 1 != 0)
    {
        string = 'нет';
        n = '#';
    }

    //выведем результат
    document.getElementById('count2').innerHTML = String(n);
    document.getElementById('output2').innerHTML = string;
}

// Задание 3
function Ex3() {
    var data = new Date(document.getElementById('n3').value);
    var cur_data = new Date();

    //вычислим разницу между датами
    var dif_date = cur_data.getTime() - data.getTime();
    dif_date = Math.floor(dif_date/1000/60/60/24) + 1;

    //выведем результат
    document.getElementById('output3').innerHTML = String(dif_date);

    //поставим в правильный педаеж слово "день"
    if (dif_date % 10 == 1 && dif_date != 11)
        document.getElementById('count3').innerHTML = 'день';
    else
        if (dif_date % 10 == 2 && dif_date != 12 ||
            dif_date % 10 == 3 && dif_date != 13 ||
            dif_date % 10 == 4 && dif_date != 14)
            document.getElementById('count3').innerHTML = 'дня';
        else
            document.getElementById('count3').innerHTML = 'дней';
}

// Задание 4
function Ex4_f() {
    window.status = 'Определитесь с выбором';
    document.getElementById('status_bar').innerHTML = 'Определитесь с выбором';
}
function Ex4_b() {
    window.status = '';
    document.getElementById('status_bar').innerHTML = '&#8199;';
}

// К заданию 5 и 6
function AddCalendar(id, year) {
    //рассчитаем количество дней в месяце
    var date = new Date(year, new Date().getMonth(), 1);
    var month = date.getMonth();
    var count_days = 33 - new Date(year, date.getMonth(), 33).getDate();

    //получим название месяца и год
    var string = '';
    switch (month) {
        case 0 : string = 'Январь'; break;
        case 1 : string = 'Февраль'; break;
        case 2 : string = 'Март'; break;
        case 3 : string = 'Апрель'; break;
        case 4 : string = 'Май'; break;
        case 5 : string = 'Июнь'; break;
        case 6 : string = 'Июль'; break;
        case 7 : string = 'Август'; break;
        case 8 : string = 'Сентябрь'; break;
        case 9 : string = 'Октябрь'; break;
        case 10 : string = 'Ноябрь'; break;
        case 11 : string = 'Декабрь'; break;
    }
    string += ' ' + date.getFullYear();

    //очистим календарь до шапки
    document.getElementById(id).innerHTML = '<tr><th colspan="7" class="table-header">' + string + '</th></tr>';
    string = '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th>'; //сюда будем накапливать данные о строке таблицы
    string += '<th>пт</th><th>сб</th><th>вс</th></tr>';
    document.getElementById(id).innerHTML += string;

    //рассчитаем день недели
    var day = date.getDay();
    if (day == 0) day = 7;

    // заполним первую строку календаря
    string = '<tr>';
    for (var i = 1; i < day; i++)
        string += '<td>&#8196;</td>';
    var cur_days = count_days - 1;
    for (i = day; i <= 7; i++)
    {
        string += '<td>' + (count_days - cur_days) + '</td>';
        cur_days--;
    }
    document.getElementById(id).innerHTML += string + '</tr>';

    // заполним прочие ячейки
    for (; cur_days > 0;)
    {
        string = '<tr>';
        for (i = 1; i <= 7; i++)
        {
            if (cur_days >= 0)
            {
                if (new Date().getDate() == count_days - cur_days)
                    string += '<td class="cur_date">';
                else
                    string += '<td>';
                string += (count_days - cur_days) + '</td>';
                cur_days--;
            }
            else
                string += '<td>&#8196;</td>';
        }
        document.getElementById(id).innerHTML += string + '</tr>';
    }
}
AddCalendar('cal_1', new Date().getFullYear());
AddCalendar('cal_2', new Date().getFullYear());


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

