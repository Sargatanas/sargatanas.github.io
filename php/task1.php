<?php
function _10To16($array)
{
    $string = '#';
    for ($i = 0; $i < 6; $i++) {
        if (($array[$i] >= 0) && ($array[$i] <= 9)) {
            $string = $string.$array[$i];
        } else {
            $temp = 55 + $array[$i];
            $string = $string.'&#'.$temp.';';
        }
    }
    return $string;
}

$array = array(5,5,5,5,5,5);
$delta_array = array(0,0,1,1,1,1);

for (;$array !== array(8,8,8,8,8,8);) {
    echo '<tr>';
    for ($i = 0; $i < 8; $i++) {
        $temp = _10To16($array);
        echo "<td style='background: $temp'>$temp</td>";
        for ($j = 5; $j >= 0; $j--) {
            $array[$j] += $delta_array[$j];
            if ($array[$j] > 15) {
                $array[$j] -= 15;
                $array[$j + 1] += 1;
            }
        }
    }
    echo '</tr>';
}

