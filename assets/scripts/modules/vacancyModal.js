const vacancyModal = () => {
    const modal = document.getElementById('vacancy-modal');
    if (!modal) return;

    const openButtons = document.querySelectorAll('.js-vacancy');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    const modalLocation = document.getElementById('vacancy-location');
    const modalTitle = document.getElementById('vacancy-title');
    const modalSalary = document.getElementById('vacancy-salary');
    const modalFormat = document.getElementById('vacancy-format');
    const modalResponsibilities = document.getElementById(
        'vacancy-responsibilities'
    );
    const modalExpectations = document.getElementById('vacancy-expectations');
    const modalOffer = document.getElementById('vacancy-offer');

    function createListFromString(dataString) {
        if (!dataString) return '';

        const items = dataString.split(';');

        const listItems = items
            .map((item) => `<li>${item.trim()}</li>`)
            .join('');

        return `<ul>${listItems}</ul>`;
    }

    openButtons.forEach((button) => {
        button.addEventListener('click', () => {
            document.body.classList.add('is-locked', 'is-overlay');

            const data = button.dataset;

            modalLocation.textContent = data.location;
            modalTitle.textContent = data.title;
            modalSalary.textContent = data.salary;
            modalFormat.textContent = data.format;

            modalResponsibilities.innerHTML = createListFromString(
                data.responsibilities
            );
            modalExpectations.innerHTML = createListFromString(
                data.expectations
            );
            modalOffer.innerHTML = createListFromString(data.offer);

            modal.classList.add('is-open');
        });
    });

    const closeModal = () => {
        modal.classList.remove('is-open');
        document.body.classList.remove('is-locked', 'is-overlay');
    };

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });

    document.addEventListener('click', (e) => {
        const isClickInsideContent = e.target.closest('.vacancy__content');
        const isClickOnOpenButton = e.target.closest('.js-vacancy');

        if (
            modal.classList.contains('is-open') &&
            !isClickInsideContent &&
            !isClickOnOpenButton
        ) {
            closeModal();
        }
    });
};

export default vacancyModal;
