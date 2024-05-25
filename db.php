<?php

$host = "localhost";
$dbname = "postgres";
$user = "postgres";
$password = "VRIDDHI";

//check for connection
$conn = pg_connect("host=$host dbname=$dbname user=$user password=$password");

if(!$conn){
    die("connection failed: " . pg_last_error());
}
else{
    echo "connected";
}

//fetching form data

$mobile = $_POST['Mobiler'];
$email = $_POST['emailr'];
$pass = $_POST['passr'];


//insert data in database

$sql = "INSERT INTO VRIDDHI(mobile_number,email_id,login_password) VALUES ('$mobile','$email','$pass')";

//execute the sql query

if(pg_query($conn, $sql)){
    echo "new user registerd succesfully";
}
else{
    echo "error: ";
}

//close connection

pg_close($conn)

?>
