const btns = document.querySelectorAll('.rate');
const click = document.getElementById("submit");
const numSelected = document.getElementById('change');
const firstPage = document.querySelector('.first1');
const secondPage = document.querySelector('.second2');


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => btn.classList.remove('active'));
        btn.classList.add('active');
    });
});

click.addEventListener('click', function (e) {
    btns.forEach((btn) => {
        if (btn.classList.value.includes('active')) {
            numSelected.innerText = btn.innerText;
            firstPage.classList.toggle('invisible');
            secondPage.classList.toggle('visible');
        } else
        window.location.href = "#";
    });
});