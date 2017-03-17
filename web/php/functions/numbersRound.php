<?php

$n = $_GET['n'];
$k = $_GET['k'];

$string = '';
$temp = round(1 / $n, $k);
$temp_max = round(1 / $n, $k + 1);;

if ($temp - $temp_max <= 0) {
    $string .= $temp;
} else {
    $temp -= pow(0.1, $k);
    $string .= $temp;
}

$length = strlen($string);
$real_length = $k + 2;
if ($length < $real_length) {
    for ($i = 0; $i < ($real_length - $length); $i++) {
        $string .= '0';
    }
}

echo $string;

