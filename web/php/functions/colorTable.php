<?php

function colorTable($number, $delta_number, $max_number) {
    $number = (int)base_convert($number, 16, 10);
    $delta_number = (int)base_convert($delta_number, 16, 10);
    $max_number = (int)base_convert($max_number, 16, 10);

    $result ="";

    $result .= "<table>";
    for (;$number <= $max_number;) {
        $result .= "<tr>";
        for ($i = 0; $i < 8; $i++) {
            if ($number <= $max_number) {
                $temp = "#".base_convert($number, 10, 16);
                $result .= "<td style='background: {$temp}'>{$temp}</td>";
                $number += $delta_number;
            } else {
                $result .= "<td> </td>";
            }
        }
        $result .= "</tr>";
    }
    $result .= "</table>";

    return $result;
}

