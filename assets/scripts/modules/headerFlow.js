export const headerFlow = () => {
    const mobileMenu = document.querySelector('.js-menu'),
        toggleButton = document.querySelector('.js-toggle-menu');

    let isOpen = false;

    const openMenu = () => {
        toggleButton.classList.add('is-transform');
        mobileMenu.classList.add('is-open');
        document.body.classList.add('is-locked');
        isOpen = true;
    };

    const closeMenu = () => {
        toggleButton.classList.remove('is-transform');
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('is-locked');
        isOpen = false;
    };

    toggleButton.addEventListener('click', () => {
        isOpen ? closeMenu() : openMenu();
    });
};
