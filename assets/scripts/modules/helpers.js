const helpers = () => {
    const animateCounters = () => {
        const counters = document.querySelectorAll('.js-counter-anim');
        if (!counters.length) return;

        counters.forEach((counter) => {
            const target = +counter.dataset.target;
            const suffix = counter.dataset.suffix || '';
            const duration = 2500;
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
                                } else if (target <= 100) {
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

    animateCounters();
};

export default helpers;
