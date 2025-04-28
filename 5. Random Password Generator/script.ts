function pass(length: number = 12): string {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+=";
    let password = ""; 
    for (let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    return password;
}

const btn = document.getElementById("generateButton") as HTMLButtonElement;
const inp = document.getElementById("password") as HTMLInputElement;
const passLen = document.getElementById("passwordLength") as HTMLInputElement;

btn.addEventListener("click", () => {
    let length = parseInt(passLen.value, 10);

    if (length < 8) length = 8;
    if (length > 20) length = 20;

    const password = pass(length);
    inp.value = password;
});