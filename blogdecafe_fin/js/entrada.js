document.addEventListener('DOMContentLoaded', function () {

    // Configuración para el segundo carrusel (Corrientes/Fases Artísticas)
    const carousel2 = document.querySelector('#carousel2');
    const prevButton2 = document.getElementById('prev2');
    const nextButton2 = document.getElementById('next2');
    const totalItems2 = carousel2.querySelectorAll('.carousel-item').length;
    let currentIndex2 = 0;

    prevButton2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : totalItems2 - 1;
        updateCarousel(carousel2, currentIndex2);
    });

    nextButton2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 < totalItems2 - 1) ? currentIndex2 + 1 : 0;
        updateCarousel(carousel2, currentIndex2);
    });

    function updateCarousel(carousel, currentIndex) {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
});
