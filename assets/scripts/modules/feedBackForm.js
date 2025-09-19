export const feedBackForm = () => {
    const formPopUp = document.querySelector('.js-form-popup');
    const openForm = document.querySelectorAll('.js-cta');

    if (!formPopUp || !openForm.length) return;

    const form = formPopUp.querySelector('.js-form');
    const success = formPopUp.querySelector('.js-form-success');
    const closeForm = formPopUp.querySelectorAll('.js-form-close');

    openForm.forEach((btn) => {
        btn.addEventListener('click', () => {
            formPopUp.classList.add('is-show');
            document.body.classList.add('is-locked', 'is-overlay');
        });
    });

    closeForm.forEach((btn) => {
        btn.addEventListener('click', () => {
            formPopUp.classList.remove('is-show');
            document.body.classList.remove('is-locked', 'is-overlay');
        });
    });

    formPopUp.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('is-hidden');
        success.classList.add('is-show');
    });

    document.body.addEventListener('click', (e) => {
        if (
            formPopUp.classList.contains('is-show') &&
            !formPopUp.contains(e.target) &&
            !e.target.closest('.js-cta')
        ) {
            formPopUp.classList.remove('is-show');
            document.body.classList.remove('is-locked', 'is-overlay');

            form.classList.remove('is-hidden');
            success.classList.remove('is-show');
        }
    });
};
