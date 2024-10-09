// ========== Carousel Component Script ========== //

// Select the main carousel elements
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

// Set initial carousel index and total items
let currentIndex = 0;
const totalItems = carouselItems.length;

// Function to update the carousel position based on the current index
const updateCarousel = () => {
    const itemWidth = carouselItems[0].getBoundingClientRect().width; // Get the width of the first item
    const offset = currentIndex * itemWidth; // Calculate offset for transform
    carouselTrack.style.transform = `translateX(-${offset}px)`; // Apply transform to shift items
};

// Function to handle the next button click in the carousel
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Increment index and wrap around if at the end
    updateCarousel();
});

// Function to handle the previous button click in the carousel
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Decrement index and wrap around if at the beginning
    updateCarousel();
});

// Responsive adjustments for carousel layout
const updateLayout = () => {
    const screenWidth = window.innerWidth;
    const itemsToShow = screenWidth > 1200 ? 3 : screenWidth > 768 ? 2 : 1; // Determine number of items to show based on screen size

    // Set each item's width based on the number of items to show
    carouselItems.forEach(item => {
        item.style.width = `${100 / itemsToShow}%`;
    });

    updateCarousel(); // Update carousel position based on new layout
};

// Call updateLayout on load and on resize events
window.addEventListener('resize', updateLayout);
updateLayout(); // Initial call to set layout based on the current screen size

// ========== Hero Slider Component Script ========== //

// Select the main hero slider elements
const heroSliderTrack = document.querySelector('.hero-slider-track');
const heroSliderItems = document.querySelectorAll('.hero-slider-item');
const prevHeroButton = document.querySelector('.hero-slide-button.prev');
const nextHeroButton = document.querySelector('.hero-slide-button.next');

// Set initial hero slider index
let currentHeroIndex = 0;

// Function to update the hero slider position based on the current index
const updateHeroSlider = () => {
    const itemWidth = heroSliderItems[0].offsetWidth; // Get the width of the first hero slider item
    const offset = currentHeroIndex * itemWidth; // Calculate offset for transform
    heroSliderTrack.style.transform = `translateX(-${offset}px)`; // Apply transform to shift hero items
};

// Handle next button click for hero slider
nextHeroButton.addEventListener('click', () => {
    currentHeroIndex = (currentHeroIndex + 1) % heroSliderItems.length; // Increment index and wrap around if at the end
    updateHeroSlider();
});

// Handle previous button click for hero slider
prevHeroButton.addEventListener('click', () => {
    currentHeroIndex = (currentHeroIndex - 1 + heroSliderItems.length) % heroSliderItems.length; // Decrement index and wrap around if at the beginning
    updateHeroSlider();
});

// Initial call to set up the hero slider position
updateHeroSlider();

