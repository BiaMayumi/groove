    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const imgWidth = document.querySelector('.carousel img').clientWidth;
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.childElementCount;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * imgWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Adicione esta parte para trocar automaticamente as imagens a cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carousel.childElementCount;
        updateCarousel();
    }, 5000); // Troque a cada 5 segundos (5000 milissegundos)

