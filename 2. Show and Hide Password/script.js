var inp = document.getElementById('password');
var btn = document.getElementById('toggleVisibility');
if (inp && btn) {
    btn.addEventListener('click', function () {
        if (inp.type === 'password') {
            inp.type = 'text';
            btn.textContent = '🕳️';
        }
        else {
            inp.type = 'password';
            btn.textContent = '👁️';
        }
    });
}
