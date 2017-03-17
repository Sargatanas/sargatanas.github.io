"use strict";

// Задание 1
function taskOne()
{
    let n = document.getElementById('input_1').value;
    let count = 0;
    let string = '';
    let min;

    //обработаем введенные данные на валидность
    if ((n < 1) || (n % 1 !== 0)) {
        string = 'не сгенерирована';
        min = '#';
        count = '#';
    } else {
        //считаем первый элемент
        min = Math.floor(Math.random() * 20);
        string += min + '&#8196;&#8196;';

        //накопим остальные
        let temp;
        for (let i = 1; i < n; i++) {
            temp = Math.floor(Math.random() * 20);
            string += temp + '&#8196;&#8196;';
            if (temp < min) {
                min = temp;
                count = 1;
            } else if (temp === min){
                 count++;
            }
        }
    }

    //выведем результат
    document.getElementById('output_1_sequence').innerHTML = string;
    document.getElementById('output_1_min').innerHTML = String(min);
    document.getElementById('output_1_count').innerHTML = String(count);
}
document.getElementById('button_1').onclick = taskOne;


// Задание 2
function taskTwo()
{
    let num = document.getElementById('input_2').value;
    let string = '';

    //вычислим сумму цифр "контрольного" числа
    let control_sum = 0;
    let num_copy;
    for (num_copy = num; num_copy > 0; num_copy = Math.floor(num_copy / 10))
        control_sum += num_copy % 10;

    //проверим числа от 1 до n-1
    let sum;
    for (let i = 1; i < num; i++) {
        sum = 0;
        for (num_copy = i; num_copy > 0; num_copy = Math.floor(num_copy / 10)) {
            sum += num_copy % 10;
        }
        if (sum == control_sum) {
            string += ' &#8196; ' + i;
        }
    }

    //оценим результат
    if ((string == '') || (num < 1) || (num % 1 != 0)) {
        string = 'нет';
        num = '#';
    }

    //выведем результат
    document.getElementById('output_2_num').innerHTML = String(num);
    document.getElementById('output_2_sequence').innerHTML = string;
}
document.getElementById('button_2').onclick = taskTwo;


// Задание 3
function taskThree()
{
    let data = new Date(document.getElementById('input_3').value);
    data.setHours(0);
    let current_data = new Date();
    current_data.setHours(0);
    current_data.setMinutes(0);
    current_data.setSeconds(0);

    //вычислим разницу между датами
    let dif_date = current_data.getTime() - data.getTime();
    dif_date = Math.floor(dif_date/1000/60/60/24);

    //выведем результат
    if (data == 'Invalid Date') {
        dif_date = 0;
    }
    document.getElementById('output_3').innerHTML = String(dif_date);

    //поставим в правильный падеж слово "день"
    if ((dif_date % 10 == 1) && (dif_date != 11))
        document.getElementById('output_3_day').innerHTML = 'день';
    else if (dif_date % 10 == 2 && dif_date != 12 ||
            dif_date % 10 == 3 && dif_date != 13 ||
            dif_date % 10 == 4 && dif_date != 14) {
        document.getElementById('output_3_day').innerHTML = 'дня';
    } else {
        document.getElementById('output_3_day').innerHTML = 'дней';
    }
}
document.getElementById('button_3').onclick = taskThree;


// Задание 4
function taskFourFocus()
{
    window.status = 'Определитесь с выбором';
    document.getElementById('status_bar').innerHTML = 'Определитесь с выбором';
}
function taskFourBlur()
{
    window.status = '';
    document.getElementById('status_bar').innerHTML = '&#8199;';
}
document.getElementById('checkbox_4').onfocus = taskFourFocus;
document.getElementById('checkbox_4').onblur = taskFourBlur;


// К заданию 5 и 6
function addCalendar(id, year)
{
    //рассчитаем количество дней в месяце
    let date = new Date(year, new Date().getMonth(), 1);
    let month = date.getMonth();
    let count_days = 33 - new Date(year, month, 33).getDate();

    //получим название месяца и год
    let string = '';
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
    document.getElementById(id).innerHTML = `<tr>
                                                <th colspan="7" class="table-header">${string}</th>
                                             </tr>
                                             <tr>
                                                <th>пн</th>
                                                <th>вт</th>
                                                <th>ср</th>
                                                <th>чт</th>
                                                <th>пт</th>
                                                <th>сб</th>
                                                <th>вс</th>
                                             </tr>`;

    //рассчитаем день недели
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }

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
function loadCalendar(year)
{
    addCalendar('calendar_1', year);
    addCalendar('calendar_2', year);
}
document.body.onload = loadCalendar.bind({},new Date().getFullYear());
document.getElementById('button_6_1').onclick = addCalendar.bind({}, "calendar_2", new Date().getFullYear() - 1);
document.getElementById('button_6_2').onclick = addCalendar.bind({}, "calendar_2", new Date().getFullYear());
document.getElementById('button_6_3').onclick = addCalendar.bind({}, "calendar_2", new Date().getFullYear() + 1);


// К заданию 7
function hidden()
{
    var area = document.getElementById('other-field');
    if(this.checked) {
        area.style.display = 'block';
    } else {
        area.style.display = 'none';
    }
        
}
document.getElementById('check-4').onchange = hidden;

function ex7Public (event)
{
    let opt = document.getElementsByName(event.target.dataset.attribute);
     if(this.checked) {
         for (let i = 0; i < opt.length; i++) {
             opt[i].style.display = 'block';
         }
     } else {
         for (let i = 0; i < opt.length; i++) {
             opt[i].style.display = 'none';
         }
     }
     
}
document.getElementById('check-1').onchange = ex7Public;
document.getElementById('check-2').onchange = ex7Public;
document.getElementById('check-3').onchange = ex7Public;

function invalidInput(error, field, string)
{
    document.getElementById(error).innerHTML = string;
    document.getElementById(error).style.color = 'red';
    document.getElementById(field).style.border = '1px solid red';
}
function validInput(error, field)
{
    document.getElementById(error).innerHTML = '&#8199;';
    document.getElementById(error).style.color = 'lightgray';
    document.getElementById(field).style.border = '1px solid gray';
}
function validateName(error, value, string)
{
    let criterion = true;
    let length = value.length;
    let char = value.charAt(0);
    if ((char < 'A') || (char > "Z") && (char < 'А') || (char >= 'Ъ') && (char <='Ь') || (char > 'Я')) {
        criterion = false;
    }
    for (let i = 1; i < length; i++) {
        char = value[i];
        if ((char < 'a') || (char > 'z') && (char < 'а') || (char > 'я')) {
            criterion = false;
        }
    }
    if (!criterion) {
        invalidInput(error, string, "введите корректные данные <br>(с заглавной буквы, без небуквенных символов)");
    } else {
        validInput(error, string);
    }
    return criterion;
}
function addValue(string, field)
{
    if (document.getElementById(field).value !== '') {
        document.getElementById('re-form').innerHTML += '<p>' + string + document.getElementById(field).value + '</p>';
    }
}
function error()
{
    let surname = document.getElementById('surname-field').value;
    let name = document.getElementById('name-field').value;
    let email = document.getElementById('email-field').value;
    let city = document.getElementById('city-field').value;
    let publication = document.getElementById('selector').value;
    let criterion_0 = true; //критерий, отвечающий за непустоту ключевых полей
                            // не используем required - атрибут обязательного для заполнения поля
    let criterion_1 = true;
    let criterion_2 = true;

    if (surname === '') {
        invalidInput("error_7_1", "surname-field", "это поле обязательно для заполнения");
        criterion_0 = false;
    } else {
        criterion_1 =  validateName("error_7_1", surname, "surname-field");
    }

    if (name === '') {
        invalidInput("error_7_2", "name-field", "это поле обязательно для заполнения");
        criterion_0 = false;
    } else {
        criterion_2 =  validateName("error_7_2", name, "name-field");
    }

    if (email === '') {
        invalidInput("error_7_3", "email-field", "это поле обязательно для заполнения");
        criterion_0 = false;
    } else {
        validInput("error_7_3", "email-field");
    }

    if (city === '-выберите город-') {
        invalidInput("error_7_4", "city-field", "пожалуйста, выберите город");
        criterion_0 = false;
    } else {
        validInput("error_7_4", "city-field");
    }

    if (publication === '') {
        invalidInput("error_7_5", "selector", "пожалуйста, выберите журнал или газету для подписки");
        criterion_0 = false;
    } else {
        validInput("error_7_5", "selector");
    }
    if (criterion_0 && criterion_1 && criterion_2) {
        document.getElementById('re-form').style.display = 'block';
        document.getElementById('re-form').innerHTML = '<h2>Ваши данные успешно переданы!</h2>';
        addValue("Фамилия: ", "surname-field");
        addValue("Имя: ", "name-field");
        document.getElementById('re-form').innerHTML += '<hr>';
        addValue("Электронная почта: ", "email-field");
        addValue("Телефон: ", "phone-field");
        addValue("Город: ", "city-field");
        document.getElementById('re-form').innerHTML += '<hr>';
        document.getElementById('re-form').innerHTML += '<p>Выбранные публикации:</p>';
        document.getElementById('re-form').innerHTML += '<ul>';
        let opt = document.getElementsByClassName('options');
        for (let i = 0; i < opt.length; i++) {
            if (opt[i].selected) {
                document.getElementById('re-form').innerHTML += '<li>' + opt[i].label + '</li>';
            }
        }
        document.getElementById('re-form').innerHTML += '</ul>';
        document.getElementById('re-form').innerHTML += '<hr>';
        document.getElementById('re-form').innerHTML += '<p class="thanks">Спасибо за заказ!</p>';
    }
}
function clear()
{
    document.getElementById('re-form').innerHTML = '';
    document.getElementById('re-form').style.display = 'none';
}
document.getElementById('reset').onclick = clear;