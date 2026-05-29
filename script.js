let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('arrow-prev');
const nextBtn = document.getElementById('arrow-next');
const viewer = document.getElementById('viewer');
const navBar = document.getElementById('nav-bar');
const btnCarousel = document.getElementById('btn-carousel');
const btnGrid = document.getElementById('btn-grid');

function initSlides() {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === 0);
    });
    updateNav();
}

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[currentSlideIndex].classList.remove('active');
    dots[currentSlideIndex].classList.remove('active');
    currentSlideIndex = index;
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
    updateNav();
}

function nextSlide() { if (currentSlideIndex < slides.length - 1) goToSlide(currentSlideIndex + 1); }
function prevSlide() { if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1); }

function updateNav() {
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

function toggleViewMode(mode) {
    if (mode === 'grid') {
        viewer.classList.remove('carousel-mode');
        viewer.classList.add('grid-mode');
        btnGrid.classList.add('active');
        btnCarousel.classList.remove('active');
        slides.forEach(s => s.classList.add('active'));
        navBar.style.display = 'none';
    } else {
        viewer.classList.add('carousel-mode');
        viewer.classList.remove('grid-mode');
        btnCarousel.classList.add('active');
        btnGrid.classList.remove('active');
        slides.forEach((s, i) => s.classList.toggle('active', i === currentSlideIndex));
        navBar.style.display = 'flex';
    }
}

// Touch swipe
let touchX = 0;
document.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; });
document.addEventListener('touchend', e => {
    if (viewer.classList.contains('grid-mode')) return;
    const diff = e.changedTouches[0].screenX - touchX;
    if (diff < -50) nextSlide();
    if (diff > 50) prevSlide();
});

// Keyboard
document.addEventListener('keydown', e => {
    if (viewer.classList.contains('grid-mode')) return;
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

window.addEventListener('DOMContentLoaded', initSlides);
