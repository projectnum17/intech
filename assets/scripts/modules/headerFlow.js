export const headerFlow = () => {
    const selectLangInteractive = () => {
        const langSelector = document.querySelector('.js-lang');

        if (!langSelector) return;

        langSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('is-active');
        });

        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target) && e.target.tagName !== 'LI') {
                langSelector.classList.remove('is-active');
            }
        });

        langSelector.addEventListener('mouseenter', () => {
            langSelector.classList.add('is-active');
        });

        langSelector.addEventListener('mouseleave', (e) => {
            if (!e.relatedTarget || !langSelector.contains(e.relatedTarget)) {
                langSelector.classList.remove('is-active');
            }
        });
    };


    const mobileMenuHandler = () => {
        const mobileMenu = document.querySelector('.js-menu');
        const toggleButton = document.querySelector('.js-toggle-menu');

        if (!mobileMenu || !toggleButton) return;

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

    mobileMenuHandler();
    selectLangInteractive();
};
