const cursor = document.querySelector('[cursor]');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('cursorhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('cursorhover')
});