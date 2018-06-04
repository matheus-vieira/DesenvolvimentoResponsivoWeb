$(document).ready(function () {

    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function () {
        // product ID will be here
        // get product id
        var id = $(this).attr('data-id');

        // read one record based on given product id
        $.getJSON("api/product/read_one.php?id=" + id, function (data) {

            // values will be used to fill out our form
            var product = {
                id: id,
                name: data.name,
                price: data.price,
                description: data.description,
                categoryId: data.category_id,
                categoryName: data.category_name
            };

            // load list of categories will be here
            // load list of categories
            $.getJSON("api/category/read.php", function (data) {
                // build 'categories option' html
                var options = categoriesOptions(data.records, product.categoryId);

                // update product html will be here
                var updateHtml = updateProductHtml(options, product);

                // inject to 'page-content' of our app
                $("#page-content").html(updateHtml);

                // chage page title
                changePageTitle("Update Product");
            });
        });
    });

    // 'update product form' submit handle will be here
    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function () {
        // get form data will be here 
        var $form = $(this);
        updateProductSubmit($form);

        return false;
    });
});

function updateProductHtml(options, product) {
    // store 'update product' html to this variable
    var update_product_html = "";

    // 'read products' button to show list of products
    update_product_html += "<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>";
    update_product_html += "<span class='glyphicon glyphicon-list'></span> Read Products";
    update_product_html += "</div>";

    // build 'update product' html form
    // we used the 'required' html5 property to prevent empty fields
    update_product_html += "<form id='update-product-form' action='#' method='post' border='0'>";
    update_product_html += "<table class='table table-hover table-responsive table-bordered'>";

    // name field
    update_product_html += "<tr>";
    update_product_html += "<td>Name</td>";
    update_product_html += "<td><input value=\"" + product.name + "\" type='text' name='name' class='form-control' required /></td>";
    update_product_html += "</tr>";

    // price field
    update_product_html += "<tr>";
    update_product_html += "<td>Price</td>";
    update_product_html += "<td><input value=\"" + product.price + "\" type='number' min='1' name='price' class='form-control' required /></td>";
    update_product_html += "</tr>";

    // description field
    update_product_html += "<tr>";
    update_product_html += "<td>Description</td>";
    update_product_html += "<td><textarea name='description' class='form-control' required>" + product.description + "</textarea></td>";
    update_product_html += "</tr>";

    // categories 'select' field
    update_product_html += "<tr>";
    update_product_html += "<td>Category</td>";
    update_product_html += "<td>" + options + "</td>";
    update_product_html += "</tr>";

    update_product_html += "<tr>";

    // hidden 'product id' to identify which record to delete
    update_product_html += "<td><input value=\"" + product.id + "\" name='id' type='hidden' /></td>";

    // button to submit form
    update_product_html += "<td>";
    update_product_html += "<button type='submit' class='btn btn-info'>";
    update_product_html += "<span class='glyphicon glyphicon-edit'></span> Update Product";
    update_product_html += "</button>";
    update_product_html += "</td>";

    update_product_html += "</tr>";

    update_product_html += "</table>";
    update_product_html += "</form>";

    return update_product_html;
}

function updateProductSubmit($form) {
    // get form data
    var form_data = JSON.stringify($form.serializeObject());

    // submit form data to api
    $.ajax({
        url: "api/product/update.php",
        type: "POST",
        contentType: 'application/json',
        data: form_data,
        success: function (result) {
            // product was created, go back to products list
            showProducts("api/product/read_paging.php");
        },
        error: function (xhr, resp, text) {
            // show error to console
            console.log(xhr, resp, text);
        }
    });
}