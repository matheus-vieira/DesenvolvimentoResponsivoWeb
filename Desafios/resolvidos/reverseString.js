function reverseString(str) {
    var ret = "";
    for (let i = str.length; i > -1; i--) {
        ret += str[i];
    }
    return ret;
}