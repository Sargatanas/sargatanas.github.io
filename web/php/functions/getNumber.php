<?php

function getNumber($numbers) {
    $result = '';

    // Удалим дублирующиеся знаки
    $pos = strpos($numbers, "  ");
    for (;$pos !== false;) {
        $numbers = str_replace("  ", " ", $numbers);
        $pos = strpos($numbers, "  ");
    }
    $char_br = "\r\n";
    if (strpos($numbers, $char_br) === false) {
        $char_br = "\n";
    }
    $find = $char_br.$char_br;
    $pos = strpos($numbers, $find);
    for (;$pos !== false;) {
    $numbers = str_replace($find, $char_br, $numbers);
    $pos = strpos($numbers, $find);
    }

    // Заменим знаки на пробел и запятые на точки
    $numbers = str_replace(",", ".", $numbers);
    $numbers = str_replace(" ", " &nbsp; ", $numbers);
    $numbers = str_replace($char_br, " &nbsp; ", $numbers);
    $result .= "<div class='text none last'>Числа</div> 
                <div class='text none last'><span>{$numbers}</span></div> 
                <div class='text none last'>лежат на отрезке ";
    $numbers = str_replace(" &nbsp; ", " ", $numbers);

    // Считаем первое число
    $pos = strpos($numbers, " ");
    $min = substr($numbers, 0, $pos);
    $max = $min;
    $numbers = substr($numbers, $pos + 1);

    // Считаем остальные числа
    for (;;) {
        $pos = strpos($numbers, ' ');
        if ($pos !== false) {
            $temp = substr($numbers, 0, $pos);
            $min = min($temp, $min);
            $max = max($temp, $max);
            $numbers = substr($numbers, $pos + 1);
        } else {
            $min = min($numbers, $min);
            $max = max($numbers, $max);
            break;
        }
    }

    $result .= "<span>&nbsp;[{$min}; &nbsp;{$max}]</span></div>";

    return $result;
}