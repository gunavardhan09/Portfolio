document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navigation on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position considering the header height
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skill Cards Flip Functionality
    const skillCards = document.querySelectorAll('.skill-card');
    const cardOverlay = document.querySelector('.card-overlay');
    let flippedCard = null; // Tracks the currently flipped card

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // If another card is already flipped, and it's not the one we just clicked,
            // un-flip it first.
            if (flippedCard && flippedCard !== card) {
                flippedCard.classList.remove('flipped');
            }

            // Toggle the 'flipped' state of the clicked card
            card.classList.toggle('flipped');

            // Update the tracked flipped card
            if (card.classList.contains('flipped')) {
                flippedCard = card;
            } else {
                flippedCard = null;
            }
        });
    });

    // Click the overlay to close any flipped card
    cardOverlay.addEventListener('click', () => {
        if (flippedCard) {
            flippedCard.classList.remove('flipped');
            flippedCard = null;
        }
    });
});