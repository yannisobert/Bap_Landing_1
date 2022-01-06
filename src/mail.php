<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$name = $_POST['name'];
$surname = $_POST['surname'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "obertyannis@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n Surname = " . $surname . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
    "CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
header('Location: index.html');