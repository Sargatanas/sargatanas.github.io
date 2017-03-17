<?php

function words($words) {
    $result = '';
    $result .= "<div class='text none'>Исходная строка:</div> <div class='text none last pre'>{$words}</div>";

// Удалим дублирующиеся пробелы
    $pos = strpos($words, "  ");
    for (;$pos !== false;) {
        $words = str_replace("  ", " ", $words);
        $pos = strpos($words, "  ");
    }

// Получим результат
    $temp = '';
    $pos = strrpos($words, " ");
    for (;$pos !== false;) {
        $temp .= substr($words, $pos + 1, strlen($words) - $pos).' ';
        $words = substr($words, 0, $pos);
        $pos = strrpos($words, " ");
    }
    $temp .= $words;

    $result .= "<div class='text none'>Преобразованная строка:</div> <div class='text none last'><span>{$temp}</span></div>";

    return $result;
}

