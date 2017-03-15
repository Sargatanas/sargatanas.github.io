<?php

$number = (int)base_convert('555555', 16, 10);
$delta_number = (int)base_convert('1111', 16, 10);
$max_number = (int)base_convert('999999', 16, 10);

echo '<table>';
for (;$number <= $max_number;) {
    echo '<tr>';
    for ($i = 0; $i < 8; $i++) {
        if ($number <= $max_number) {
            $temp = '#'.base_convert($number, 10, 16);
            echo "<td style='background: {$temp}'>{$temp}</td>";
            $number += $delta_number;
        } else {
            echo "<td> </td>";
        }
    }
    echo '</tr>';
}
echo '</table>';