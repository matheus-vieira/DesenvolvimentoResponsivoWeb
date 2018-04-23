function reverseString(str) {
    var ret = "";
    for (let i = str.length; i > -1; i--) {
        ret += str[i];
    }
    return ret;
}

function isPalindrome(str) {
    return reverseString(str) === str;
}
function removerAcentos(newStringComAcento) {
    var string = newStringComAcento;
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,
        n: /\xF1/g
    };

    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
    }

    return string;
}

function isPalindromeRecursive(str) {
    str = str.toLowerCase();
    str = removerAcentos(str);
    str = str.replace(/\W/g, '');
    if (str.length < 2)
        return true;
    if (str[0] !== str[str.length - 1])
        return false
    return isPalindrome(str.slice(1, -1));
}