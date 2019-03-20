<?php
function getConnection() {
	$dbhost="e83453-mysql.services.easyname.eu";
	$dbuser="u130258db1";
	$dbpass=".9xryjwgtubg";
	$dbname="u130258db1";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh -> exec("set names utf8");
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}
?>