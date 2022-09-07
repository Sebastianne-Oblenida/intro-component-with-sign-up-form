const submit = document.querySelector('button');
const inputs = document.querySelectorAll('input');

submit.addEventListener('click', function(e) {
    inputs.forEach(function(input) {
        const error = document.querySelector(`#${input.name}`);
        const errorImg = document.querySelector(`#${input.name}Img`);
        if (!input.value) {
            e.preventDefault();
            input.classList.add('input-error')
            errorImg.style.visibility = 'visible';
            error.style.display = 'block';
        }
        else {
            input.classList.remove('input-error')
            errorImg.style.visibility = 'hidden';
            error.style.display = 'none';
        }
    })
});