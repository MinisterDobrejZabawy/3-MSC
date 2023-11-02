// Funkcja obsługująca efekt paralaksy na scroll
function parallaxScroll() {
	var introSection = document.querySelector('.intro');
	var introTitle = document.querySelector('.intro-title');
	var introImage = document.querySelector('.intro-img-container-curie');
	var backgroundImage = document.querySelector('.background-image');
	var scrollPosition = window.scrollY;

	// Reguluj prędkość paralaksy dla tytułu, obrazu i tła
	var titleParallaxSpeed = 0.5;
	var imageParallaxSpeed = 0.2;
	var backgroundParallaxSpeed = 0.4;

	// Przesuń tytuł i obraz na scroll
	introTitle.style.transform =
		'translateY(' + scrollPosition * titleParallaxSpeed + 'px)';
	introImage.style.transform =
		'translateY(' + scrollPosition * imageParallaxSpeed + 'px)';
    backgroundImage.style.transform = 
        'translateY(' + scrollPosition * backgroundParallaxSpeed + 'px)';
}

// Nasłuchuj zdarzenie scroll i wywołaj funkcję parallaxScroll
window.addEventListener('scroll', parallaxScroll);
