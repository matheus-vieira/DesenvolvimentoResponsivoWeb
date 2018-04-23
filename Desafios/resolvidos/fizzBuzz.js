function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var mostra = "";
        if (i % 3 === 0) mostra += "Fizz";
        if (i % 5 === 0) mostra += "Buzz";
        console.log(mostra || i);
    }
}