<?php

    $message_sent = false;

    if(isset($_POST['email']) && $_POST['email'] != '') {

        if ( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $message = $_POST['message'];
        
            $to = "david2k8_619@hotmail.co.uk";
            $body = "";
        
            $body .= "From: " .$userName. "\r\n";
            $body .= "From: " .$userEmail. "\r\n";
            $body .= " " .$message. "\r\n";
        
            mail($to,$subject,$body);
            $message_sent = true;
        }
    }
?>