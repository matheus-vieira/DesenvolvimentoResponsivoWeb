function maxCharacter(str) {
    var charMap = {};
    var maxNum = 0;
    var maxChar = '';

    //percorre a string
    for (var i = 0; i < str.length; i++) {
        //se não contabilizou o caracter inicia com zero
        if (!charMap[str[i]])
            charMap[str[i]] = 0;

        // incrementa em um
        charMap[str[i]]++;
    }

    // para percorrer propriedades em um objeto
    // utilizamos o for..in
    for (var char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
