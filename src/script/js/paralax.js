// Funkcja obsługująca efekt paralaksy na scroll
function parallaxScroll() {
	const introSection = document.querySelector('.intro');
	const introTitle = document.querySelector('.intro-title');
	const  introImage = document.querySelector('.intro-img-container-curie');
	const  backgroundImage = document.querySelector('.background-image');
	const  scrollPosition = window.scrollY;

	// Reguluj prędkość paralaksy dla tytułu, obrazu i tła
	let titleParallaxSpeed = 0.5;
	let imageParallaxSpeed = 0.2;
	let backgroundParallaxSpeed = 0.4;

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