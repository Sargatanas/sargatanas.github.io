<?php

function getNumber($numbers) {
    $result = '';

    // Удалим дублирующиеся знаки
    $pos = strpos($numbers, "  ");
    for (;$pos !== false;) {
        $numbers = str_replace("  ", " ", $numbers);
        $pos = strpos($numbers, "  ");
    }
    $pos = strpos($numbers, "\r\n\r\n");
    for (;$pos !== false;) {
    $numbers = str_replace("\r\n\r\n", "\r\n", $numbers);
    $pos = strpos($numbers, "\r\n\r\n");
    }

    // Удалим дублирующиеся знаки
    $pos = strpos($numbers, "  ");
    for (;$pos !== false;) {
        $numbers = str_replace("  ", " ", $numbers);
    }
    $pos = strpos($numbers, "\r\n\r\n");
    for (;$pos !== false;) {
        $numbers = str_replace("\r\n\r\n", "\r\n", $numbers);
    }

    // Заменим знаки на пробел
    $numbers = str_replace(" ", " &nbsp; ", $numbers);
    $numbers = str_replace("\r\n", " &nbsp; ", $numbers);
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

