export const productGallery = () => {
    if (typeof Swiper === 'undefined') return;

    const smGallery = document.querySelector('#previewSm');
    const lgGallery = document.querySelector('#previewLg');

    if (!smGallery && !lgGallery) return;

    new Swiper(smGallery, {
        spaceBetween: 8,
        loop: true,
        slidesPerView: 3.5,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
            },
            577: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3.5,
            },
        },
    });

    new Swiper(lgGallery, {
        spaceBetween: 8,
        grabCursor: true,
        loop: true,
        thumbs: {
            swiper: smGallery,
        },
        navigation: {
            nextEl: '.intro__gallery-nav',
        },
    });
};
