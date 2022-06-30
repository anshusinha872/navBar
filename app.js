const btn = document.getElementById('btn');
const links = document.querySelectorAll('#link');
links.forEach(function (e) {
    // console.log(e);
    btn.addEventListener('click', function () {
        if (e.classList.contains('temp')) {
            e.classList.remove('temp');
        }
        else {
            e.classList.add('temp');
        }
    })
})
