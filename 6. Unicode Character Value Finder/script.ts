function val(char: string): string {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }
    return `Unicode:
    U+${char.charCodeAt(0).toString(16).toUpperCase()}`;
}

var inputChar = document.getElementById("char") as HTMLInputElement;
var display = document.getElementById("unicodeValue") as HTMLParagraphElement;
var getUnicodeBtn = document.getElementById("getunicode") as HTMLButtonElement;

getUnicodeBtn.addEventListener("click", () => {
    const char = inputChar.value;
    const unicode = val(char);
    display.textContent = unicode;
});
