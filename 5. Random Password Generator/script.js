function pass(length) {
    if (length === void 0) { length = 12; }
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    return password;
}
var btn = document.getElementById("generateButton");
var inp = document.getElementById("password");
var passLen = document.getElementById("passwordLength");
btn.addEventListener("click", function () {
    var length = parseInt(passLen.value, 10);
    if (length < 8)
        length = 8;
    if (length > 20)
        length = 20;
    var password = pass(length);
    inp.value = password;
});
