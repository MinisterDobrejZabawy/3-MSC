document.addEventListener('DOMContentLoaded', function () {
  const introImgContainer = document.querySelector(
    '.intro-img-container'
  );
  const introTitle = document.querySelector('.intro-title');
  const background = document.querySelector('.background-image');
  const body = document.querySelector('body');
  let mouseX = 0;
  let mouseY = 0;

  body.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) / 400;
    const moveY = (mouseY - centerY) / 400;

    introImgContainer.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    introTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    background.style.transform = `translate(${moveX}px, ${moveY}px)`;

    requestAnimationFrame(animate);
  };

  animate();
});