export const faqBoxes = () => {
    const faqBoxes = document.querySelectorAll('.faq-box');

    if (!faqBoxes.length) return;

    faqBoxes[0].classList.add('is-open');

    faqBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const isAlreadyOpen = box.classList.contains('is-open');

            faqBoxes.forEach((b) => b.classList.remove('is-open'));

            if (!isAlreadyOpen) {
                box.classList.add('is-open');
            }
        });
    });
};
