window.addEventListener('load', function() {
  const sidebar = document.querySelector('.biography-sidebar');
  const introTitle = document.querySelector('.intro-title');
  const biographyContainer = document.querySelector('.biography-container');

  const offset = introTitle.getBoundingClientRect().bottom;

  let biographyVisible = false;

  window.addEventListener('scroll', function() {
    if (introTitle.getBoundingClientRect().bottom <= 0) {
      sidebar.style.transform = 'translateX(0)';
    } else {
      sidebar.style.transform = 'translateX(-100%)';
    }

    if (!biographyVisible && biographyContainer.getBoundingClientRect().top <= window.innerHeight * 0.75) {
      biographyVisible = true;
      animateBiographyIn();
    }
  });

  function animateBiographyIn() {
    let opacity = 0;
    let translateY = 20;
    const interval = setInterval(function() {
      opacity += 0.05;
      translateY -= 1;
      biographyContainer.style.opacity = opacity;
      biographyContainer.style.transform = 'translateY(' + translateY + 'px)';
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 30);
  }
});
