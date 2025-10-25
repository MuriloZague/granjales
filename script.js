document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const carousel = document.getElementById("products-carousel");

    if (carousel) {
        const getItemWidthAndGap = () => {
            const firstProduct = carousel.querySelector(".product");
            if (!firstProduct){ 
                return 0;
            }
            const productWidth = firstProduct.offsetWidth;
            const productGap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
            return productWidth + productGap;
        };

        nextButton.addEventListener("click", () => {
            const itemWidth = getItemWidthAndGap();
            if (itemWidth === 0) return;

            const carouselWidth = carousel.clientWidth;
            const totalScrollWidth = carousel.scrollWidth;
            const currentScrollLeft = carousel.scrollLeft;

            if (currentScrollLeft + carouselWidth >= totalScrollWidth - 5) {
                carousel.scrollLeft = 0;
                carousel.style.scrollBehavior = 'smooth';
            } else {
                carousel.scrollLeft += itemWidth;
            }
        });

        prevButton.addEventListener("click", () => {
            const itemWidth = getItemWidthAndGap();
            if (itemWidth === 0) return;

            const totalScrollWidth = carousel.scrollWidth;
            const currentScrollLeft = carousel.scrollLeft;

            if (currentScrollLeft <= 5) {
                carousel.style.scrollBehavior = 'auto';
                carousel.scrollLeft = totalScrollWidth;
                carousel.style.scrollBehavior = 'smooth';
            } else {
                carousel.scrollLeft -= itemWidth;
            }
        });
    }
});