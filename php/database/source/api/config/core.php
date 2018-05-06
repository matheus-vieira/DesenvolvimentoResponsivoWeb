<?php
    // show error reporting
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $protocol = 'http';
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != "off") {
        $protocol = "https";
    }
    
    // home page url
    $home_url = $protocol . "://" . $_SERVER['HTTP_HOST'] ."/api/";
    
    // page given in URL parameter, default page is one
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    
    // set number of records per page
    $records_per_page = 5;
    
    // calculate for the query LIMIT clause
    $from_record_num = ($records_per_page * $page) - $records_per_page;
?>