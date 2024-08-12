document.addEventListener('DOMContentLoaded', function () {
    // Configuración para el primer carrusel (Catálogo Subasta)
    const carousel1 = document.querySelector('#carousel1');
    const prevButton1 = document.getElementById('prev1');
    const nextButton1 = document.getElementById('next1');
    const totalItems1 = carousel1.querySelectorAll('.carousel-item').length;
    let currentIndex1 = 0;

    prevButton1.addEventListener('click', () => {
        currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : totalItems1 - 1;
        updateCarousel(carousel1, currentIndex1);
    });

    nextButton1.addEventListener('click', () => {
        currentIndex1 = (currentIndex1 < totalItems1 - 1) ? currentIndex1 + 1 : 0;
        updateCarousel(carousel1, currentIndex1);
    });

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
