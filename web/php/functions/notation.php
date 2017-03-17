<?php

function translateFrom($number, $base)
{
    $number = (double)$number;
    $crit = 0;
    if ($number < 0) {
        $number = -$number;
        $crit = 1;
    }
    $result = (int)base_convert(floor($number), $base, 10);
    $length = strlen($number) - strlen(floor($number)) - 1;
    $temp = substr($number, strlen(floor($number)) + 1, $length);
    for ($i = 1; $i <= $length; $i++) {
        $result += (int)substr($temp,0,1) * pow($base, -$i);
        $temp = substr($temp, 1, $length - $i);
    }
    if ($crit === 1) {
        $result = '-'.$result;
    }
    return $result;
}

function translateTo($number, $base)
{
    $number = (double)$number;
    $crit = 0;
    if ($number < 0) {
        $number = -$number;
        $crit = 1;
    }
    $count = floor($number);
    $result = base_convert($count, 10, $base).'.';
    $number -= floor($number);
    for ($i = 1; $i <=10; $i++) {
        $divisor = pow($base, $i);
        $divisor = 1 / $divisor;
        $count = 0;
        for (;;) {
            if ($number < $divisor) {
                break;
            }
            $number -= $divisor;
            $count++;
        }
        $result .= $count;
    }

    if (strpos($result, '.') !== false) {
        for (;;) {
            if (substr($result, strlen($result) - 1, 1) != '0') {
                break;
            } else {
                $result = substr($result, 0, strlen($result) - 1);
            }
        }
    }
    if (strpos($result, '.') !== false) {
        for (;;) {
            if (substr($result, strlen($result) - 1, 1) != '.') {
                break;
            } else {
                $result = substr($result, 0, strlen($result) - 1);
            }
        }
    }


    if ($crit === 1) {
        $result = '-'.$result;
    }

    return $result;
}

$number_1 = (double)$_GET['num1'];
$number_2 = (double)$_GET['num2'];
$base = (int)$_GET['base'];
$operation = $_GET['operation'];

$dec_number_1 = translateFrom($number_1, $base);
$dec_number_2 = translateFrom($number_2, $base);

switch ($operation) {
    case 'sum': $result = $dec_number_1 + $dec_number_2; break;
    case 'sub': $result = $dec_number_1 - $dec_number_2; break;
    case 'mult': $result = $dec_number_1 * $dec_number_2; break;
    case 'div':
        if ($dec_number_2 !== 0) {
            $result = $dec_number_1 / $dec_number_2;
            break;
        } else {
            $result = '';
            break;
        }
    case 'pow': $result = pow($dec_number_1, $dec_number_2); break;
}

if ($result !== '') {
    $result = translateTo($result, $base);
} else {
    $result = 'операция не может быть выполнена';
}

echo $result;

