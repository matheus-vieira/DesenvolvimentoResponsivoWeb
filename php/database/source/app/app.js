$(document).ready(function () {
    // app html
    app_html = "";
    app_html += "<div class='container'>";
    app_html += "<div class='page-header'>";
    app_html += "<h1 id='page-title'>Read Products</h1>";
    app_html += "</div>";

    // this is where the contents will be shown.
    app_html += "<div id='page-content'></div>";
    app_html += "</div>";

    // inject to 'app' in index.html
    $("#app").html(app_html);
});

// change page title
function changePageTitle(page_title) {
    // change page title
    $('#page-title').text(page_title);

    // change title tag
    document.title = page_title;
}

// function to make form values to json format
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function categoriesOptions(records, id) {
    // loop through returned list of data
    var categories_options_html = "";
    categories_options_html += "<select name='category_id' class='form-control'>";
    $.each(records, function (key, val) {
        categories_options_html += "<option value='" + val.id + "'"
        // pre-select option is category id is the same
        if (id && val.id == id)
            categories_options_html += " selected>";
        categories_options_html = ">" + val.name + "</option>";
    });
    categories_options_html += "</select>";

    return categories_options_html;
}