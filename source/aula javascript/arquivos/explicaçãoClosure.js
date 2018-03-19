// There was a princess...
function princess() {
    //She lived in a wonderful world full of adventures.
    var adventures = [];
    // She met her Prince Charming,
    function princeCharming() { /* ... */ }
    // rode around her world on a unicorn,
    var unicorn = { /* ... */ },
        // battled dragons,
        dragons = [ /* ... */ ],
        // encountered talking animals, and many other fantastical things.
        squirrel = "Hello!";

    // But she would always have to return back
    // to her dull world of chores and grown-ups.
    return {
        story: function() {
            // And she would often tell them
            // of her latest amazing adventure as a princess.
            return adventures[adventures.length - 1];
        }
    };
}

//But all they would see is a little girl...
var littleGirl = princess();
//...telling stories about magic and fantasy.
littleGirl.story();