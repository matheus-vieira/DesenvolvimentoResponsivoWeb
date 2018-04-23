function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var mostra = "";
        if (i % 3 === 0) mostra += "Fizz";
        if (i % 5 === 0) mostra += "Buzz";
        console.log(mostra || i);
    }
}

for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}