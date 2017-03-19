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
        <a class="button" href="#block_3">задание 3</a>
        <br>
        <a class="button" href="#block_4">задание 4</a>
        <a class="button" href="#block_5">задание 5</a>
        <a class="button" href="#block_6">задание 6</a>
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

            <?php echo $task_1; ?>
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

        <?php echo $task_2; ?>
    </div>

        <div class="block" id="block_3">
            <h2>
                Задание №3
            </h2>

            <p class="text task">
                14. Даны натуральные числа <i>n</i> и <i>k</i>,&nbsp; <i>n</i>&nbsp;>&nbsp;1.<br>
                Напечатать <i>k</i> десятичных знаков числа 1&#8201;/&#8201;<i>n</i>.<br>
                Программа должна использовать только целые переменные.
            </p>

            <form onsubmit="answerThree(); return false" class="post" autocomplete="off">
                <h2>
                    Результат
                </h2>

                <div>
                    <label for="input_3_1" class="text none" >
                        Введите <i>n</i>:
                    </label>
                    <input type="number" min="2" id="input_3_1" class="last" required>
                </div>

                <div>
                    <label for="input_3_2" class="text none">
                        Введите <i>k</i>:
                    </label>
                    <input type="number" min="1" id="input_3_2" required>
                </div>

                <div class="last text center">
                    <input type="submit" id="submit_3" value="Вывести">
                </div>

                <div class="text none last">
                    Ответ: <span id="output_3">#</span>
                </div>
            </form>


        </div>

        <div class="block" id="block_4">
            <h2>
                Задание №4
            </h2>

            <p class="text task">
                14. Написать программу-вычислитель в заданной системе счисления (меньше&#8199;10), которая позволяет
                пользователю передать два числа, основание системы счисления и указать операцию, выполняемую над ними.
            </p>

            <form onsubmit="answerFour(); return false" class="post"  autocomplete="off">
                <h2>
                    Результат
                </h2>

                <div>
                    <label for="input_4_1" class="text none">
                        Первое число:
                    </label>
                    <input type="text" id="input_4_1" class="last" pattern="-?[0-9]+.?[0-9]*" required>
                </div>

                <div>
                    <label for="input_4_2" class="text none">
                        Второе число:
                    </label>
                    <input type="text" id="input_4_2" class="last" pattern="-?[0-9]+.?[0-9]*" required>
                </div>

                <div>
                    <label for="input_4_3" class="text none">
                        Основание СС:
                    </label>
                    <input type="number" min="1" max="9" id="input_4_3" class="last" required>
                    <div class="comment">
                        возможные значения: 0-9
                    </div>
                </div>

                <div>
                    <label for="input_4_4" class="text none">
                        Операция:
                    </label>
                    <input type="text" id="input_4_4" class="last" required>
                    <div>
                        <span class="comment">возможные значения: + - * / ^</span>
                    </div>
                </div>

                <div class="last text center">
                    <input type="submit" id="submit_4" value="Вывести">
                </div>

                <div class="text none last">
                    Ответ: <span id="output_4">#</span>
                </div>
            </form>


        </div>

        <div class="block" id="block_5">
            <h2>
                Задание №5
            </h2>

            <p class="text task">
                14. Файл содержит вещественные числа. Указать отрезок, которому принадлежат все элементы файла.
            </p>

            <p class="text">
                Числа в файл записываются через пробел или перевод строки
            </p>

            <?php echo $task_5; ?>
        </div>

        <div class="block" id="block_6">
            <h2>
                Задание №6
            </h2>

            <p class="text task">
                14. Дана строка, состоящая из русских слов, разделенных пробелами (одним или несколькими).<br>
                Вывести строку, содержащую эти же слова (разделенные одним пробелом),
                но расположенные в обратном порядке.
            </p>

            <?php echo $task_6 ?>
        </div>
    </div>

</div>

<script src="../js/script-5.js"></script>

</body>
</html>