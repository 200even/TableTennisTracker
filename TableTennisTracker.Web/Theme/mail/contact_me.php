<?php
// Check for empty fields
if(empty($_POST['name'])  		||
	 empty($_POST['email']) 		||
	 empty($_POST['phone']) 		||
	 empty($_POST['message'])	||
	 !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
	 {
	echo "No arguments Provided!";
	return false;
	 }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'sferguson@privacystar.com';
$email_subject = "FO Table Tennis:  $name";
$email_body = "You have received a new message from FO|TT.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@privacystar.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
@mail($to,$email_subject,$email_body,$headers);
echo "<h1>Message Sent!</h1>";
return true;			
?>