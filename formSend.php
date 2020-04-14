<?php
$to = $_POST['email'];
$subject = "NKF Triathlon & Cook-Off";
$message = "Thank you for registering! Please show this email when you enter the event"
$headers = 'From:'. "NKFevents@outlook.com" . "rn"; // Sender's Email
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail($to, $subject, $message, $headers);
echo "Your mail has been sent successfuly ! Thank you for your feedback";
?>
