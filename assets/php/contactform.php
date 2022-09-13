<?php

if (isset($_POST['submit'])){
    $name = $_POST['fname'];
    $lname = $_POST['lname'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];

    $mailTo = "bmpandrada@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You Have receive an e-mail from ".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

}
?>