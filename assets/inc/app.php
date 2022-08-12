<?php
$curl= curl_init();
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_URL, 'https://api.mineaurion.com/query');
$res = curl_exec($curl);
curl_close($curl);
$jo = json_decode($res);
var_dump($res);
die();