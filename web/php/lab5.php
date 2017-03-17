<?php

require_once ("../php/functions/colorTable.php");
$number = 555555;
$delta_number = 1111;
$max_number = 999999;
$task_1 = colorTable($number, $delta_number, $max_number);

require_once ("../php/functions/statement.php");
$task_2 = statement();

require_once("../php/functions/getNumber.php");
$numbers = file_get_contents('../store/task5.txt');
$task_5 = getNumber($numbers);

require_once ("../php/functions/words.php");
$words = file_get_contents("../store/task6.txt");
$task_6 = words($words);

require_once("../php/template.php");