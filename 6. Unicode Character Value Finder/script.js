function val(char) {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }
    return "Unicode:\n    U+".concat(char.charCodeAt(0).toString(16).toUpperCase());
}
var inputChar = document.getElementById("char");
var display = document.getElementById("unicodeValue");
var getUnicodeBtn = document.getElementById("getunicode");
getUnicodeBtn.addEventListener("click", function () {
    var char = inputChar.value;
    var unicode = val(char);
    display.textContent = unicode;
});
