<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    // include database and object files
    include_once '../config/core.php';
    include_once '../shared/utilities.php';
    include_once '../config/database.php';
    include_once '../objects/category.php';
    
    // utilities
    $utilities = new Utilities();
    
    // instantiate database and category object
    $database = new Database();
    $db = $database->getConnection();
    
    // initialize object
    $category = new Category($db);
    
    // query categorys
    $stmt = $category->readPaging($from_record_num, $records_per_page);
    $num = $stmt->rowCount();
    
    // check if more than 0 record found
    if ($num > 0) {
        // categorys array
        $categories_arr = array();
        $categories_arr["records"]=array();
        $categories_arr["paging"]=array();
    
        // retrieve our table contents
        // fetch() is faster than fetchAll()
        // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);
    
            $category_item = array(
                "id" => $id,
                "name" => $name,
                "description" => html_entity_decode($description)
            );
    
            array_push($categories_arr["records"], $category_item);
        }
    
        // include paging
        $total_rows=$category->count();
        $page_url="{$home_url}category/read_paging.php?";
        $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
        $categories_arr["paging"]=$paging;
    
        echo json_encode($categories_arr);
    } else {
        echo json_encode(
            array("message" => "No categories found.")
        );
    }
?>