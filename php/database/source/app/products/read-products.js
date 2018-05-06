$(document).ready(function () {
    // show list of product on first load
    showProducts("api/product/read_paging.php");

    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function () {
        showProducts("api/product/read_paging.php");
    });

    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function () {
        // get json url
        var json_url = $(this).find('a').attr('data-page');
        // show list of products
        showProducts(json_url);
    });
});

// function to show list of products
function showProducts(json_url) {
    if (!json_url) return;
    // get list of products from the API
    $.getJSON(json_url, function (data) {

        // html for listing products
        readProductsTemplate(data, "");

        // chage page title
        changePageTitle("Read Products");

    });
}