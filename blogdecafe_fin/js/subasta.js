document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
});