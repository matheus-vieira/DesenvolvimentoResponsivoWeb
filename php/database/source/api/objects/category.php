<?php
    class Category {
    
        // database connection and table name
        private $conn;
        private $table_name = "categories";
    
        // object properties
        public $id;
        public $name;
        public $description;
        public $created;
    
        public function __construct($db){
            $this->conn = $db;
        }
    
        // used by select drop-down list
        public function readAll(){
            //select all data
            $query = "SELECT id,
                             name,
                             description
                        FROM " . $this->table_name . "
                    ORDER BY name";
    
            $stmt = $this->conn->prepare( $query );
            $stmt->execute();
    
            return $stmt;
        }

        // used by select drop-down list
        public function read() {
            //select all data
            $query = "SELECT id,
                             name,
                             description
                        FROM " . $this->table_name . "
                    ORDER BY name";
        
            $stmt = $this->conn->prepare( $query );
            $stmt->execute();
        
            return $stmt;
        }

        // used when filling up the update category form
        function readOne() {
            // query to read single record
            $query = "SELECT id,
                             name,
                             description
                        FROM " . $this->table_name . "
                       WHERE id = ?
                       LIMIT 0,1";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind id of category to be updated
            $stmt->bindParam(1, $this->id);
        
            // execute query
            $stmt->execute();
        
            // get retrieved row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            // set values to object properties
            $this->name = $row['name'];
            $this->description = $row['description'];
        }

        // create category
        function create() {
            // query to insert record
            $query = "INSERT INTO " . $this->table_name . "
                         SET name=:name, description=:description, created=:created";

            // prepare query
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->description=htmlspecialchars(strip_tags($this->description));
        
            // bind values
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":description", $this->description);
            $stmt->bindParam(":created", $this->created);
        
            // execute query
            // if everything ok return true, otherwise return false
            return $stmt->execute();
        }

        // update the category
        function update() {
            // update query
            $query = "UPDATE " . $this->table_name . "
                         SET name = :name,
                             description = :description
                       WHERE id = :id";

            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->description=htmlspecialchars(strip_tags($this->description));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind new values
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':id', $this->id);
        
            // execute the query
            // if everything ok return true, otherwise return false
            return $stmt->execute();
        }

        // delete the category
        function delete() {
            // delete query
            $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        
            // prepare query
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind id of record to delete
            $stmt->bindParam(1, $this->id);
        
            // execute query
            // if everything ok return true, otherwise return false
            return $stmt->execute();
        }

        // search categorys
        function search($keywords) {
            // select all query
            $query = "SELECT id,
                             name,
                             description
                        FROM " . $this->table_name . "
                       WHERE name LIKE ?
                          OR description LIKE ?
                       ORDER BY created DESC";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $keywords=htmlspecialchars(strip_tags($keywords));
            $keywords = "%{$keywords}%";
        
            // bind
            $stmt->bindParam(1, $keywords);
            $stmt->bindParam(2, $keywords);
            $stmt->bindParam(3, $keywords);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read categorys with pagination
        public function readPaging($from_record_num, $records_per_page) {
            // select query
            $query = "SELECT id,
                             name,
                             description
                        FROM " . $this->table_name . "
                       ORDER BY created DESC
                       LIMIT ?, ?";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind variable values
            $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
            $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
        
            // execute query
            $stmt->execute();
        
            // return values from database
            return $stmt;
        }

        // used for paging categorys
        public function count() {
            $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
        
            $stmt = $this->conn->prepare( $query );
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            return $row['total_rows'];
        }
    }
?>