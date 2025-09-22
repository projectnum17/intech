const helpers = () => {
    const animateCounters = () => {
        const counters = document.querySelectorAll('.js-counter-anim');
        if (!counters.length) return;

        counters.forEach((counter) => {
            const target = +counter.dataset.target;
            const suffix = counter.dataset.suffix || '';
            const duration = 4500;
            const steps = 60;
            const interval = duration / steps;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            let current = 0;
                            let stepCount = 0;

                            const timer = setInterval(() => {
                                stepCount++;

                                let increment;
                                if (target <= 50) {
                                    increment = 1;
                                } else if (target <= 500) {
                                    increment = 10;
                                } else if (target <= 1000) {
                                    increment = 100;
                                } else {
                                    increment = 1000;
                                }

                                current += increment;
                                if (current >= target || stepCount >= steps) {
                                    counter.innerText = target + suffix;
                                    clearInterval(timer);
                                } else {
                                    counter.innerText = current + suffix;
                                }
                            }, interval);

                            observer.unobserve(counter);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(counter);
        });
    };

    // === Remove if you need
    const filterHandler = () => {
        const filterBtns = document.querySelectorAll('.js-filter');
        if (!filterBtns.length) return;

        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                filterBtns.forEach((el) => {
                    el.classList.remove('is-active');
                });

                btn.classList.add('is-active');

                const container = btn.parentElement;
                if (container) {
                    const containerCenter = container.clientWidth / 2;
                    const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
                    const scrollLeft = btnCenter - containerCenter;

                    container.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth',
                    });
                }
            });
        });
    };

    // === Remove if you need
    const breadCrumbsHandler = () => {
        const crumbParent = document.querySelector('.breadcrumbs');
        if (!crumbParent) return;

        const crumbItem = crumbParent.querySelectorAll('li');

        if (crumbItem.length > 2) {
            crumbParent.classList.add('breadcrumbs--lg')
        } else {
            crumbParent.classList.add('breadcrumbs--sm')
        }
    };

    animateCounters();
    // === Remove if you need
    filterHandler();
    breadCrumbsHandler();
};

export default helpers;
