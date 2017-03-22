<?php

$n = $_GET['n'];
$k = $_GET['k'];

$string = '0.';
$temp = 10;
for ($i = 0; $i < $k;) {
    for (;$temp < $n;) {
        $temp *= 10;
        $string .= "0";
        $i++;
    }
    if ($i < $k) {
        $string .= floor($temp / $n);
        $temp %= $n;
        $temp *= 10;
        $i++;
    }
}

echo $string;

