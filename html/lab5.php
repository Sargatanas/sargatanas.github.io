<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №5</title>
    <link href="../css/lab5.css" rel="stylesheet">
</head>
<body>
<div>

    <!--[if !IE]><!-->
    <a href="../index.html" id="pos">
        <span id="back-field"></span>
        <span id="back"></span>
        <div id="text">НАЗАД</div>
    </a>
    <a href="#head" title="Вверх" id="up"></a>
    <!-- <![endif]-->

    <div class="header">
        Лабораторная работа №5
    </div>

    <h1>
        ПРОГРАММИРОВАНИЕ НА PHP
    </h1>

    <div class="header_button" id="head">
        <a class="button" href="#block_1">задание 1</a>
        <a class="button" href="#block_2">задание 2</a>
        <a class="button" href="#">задание 3</a>
        <br>
        <a class="button" href="#">задание 4</a>
        <a class="button" href="#">задание 5</a>
        <a class="button" href="#">задание 6</a>
    </div>

    <div class="container">
        <div class="block" id="block_1">
            <h2>
                Задание №1
            </h2>

            <p class="text task">
                14. Вывести на экран таблицу, текст в ячейках которой закрашен в разные цвета, а номера цветов отображаются
                в соответствующих ячейках. Номера цветов изменяются от 555555 до 999999 с шагом 1111.
            </p>

            <p class="text last">
                Так как цвет текста слабо заметен, параметр "цвет текста" при решении задачи изменен на "цвет ячейки"
            </p>

            <?php require_once($_SERVER['DOCUMENT_ROOT'].'/php/task1.php'); ?>
        </div>

        <div class="block" id="block_2">
            <h2>
                Задание №2
            </h2>

            <p class="text task">
                14. Описать массив экзаменационная ведомость (предмет, номер группы, номер зачетной книжки, фамилия,
                имя, отчество студента, его оценки по итогам текущей сессии). Определить отличников, хорошистов,
                троечников и двоечников.
            </p>

            <?php require_once($_SERVER['DOCUMENT_ROOT'].'/php/task2.php'); ?>
        </div>
    </div>

</div>
</body>
</html>