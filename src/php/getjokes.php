<?php
   $dbhost = 'mysql57.unoeuro.com';
   $dbuser = 'covfefetime_dk';
   $dbpass = 'Puttelicious1';


   $conn=mysqli_connect($dbhost, $dbuser, $dbpass, "covfefetime_dk_db");
   if (!$conn) { 
   echo "ERROR: Could not connect to mysql-database at nielsdreijer.com!" ; 
   exit ; 
   } 

   $sql = "SELECT * from 'jokes' ORDER BY ASC";
   $result = mysqli_query($conn, $sql);

   while($row = mysqli_fetch_array($result)) {
       echo "Hej echo";
   };

?>
