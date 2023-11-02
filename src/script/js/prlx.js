<script>
  document.addEventListener("DOMContentLoaded", function () {
    const introImgContainer = document.querySelector(".intro-img-container");
    const introTitle = document.querySelector(".intro-title");
    const body = document.querySelector("body");

    body.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (mouseX - centerX) / 200;
      const moveY = (mouseY - centerY) / 400;

      introImgContainer.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      introTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
</script>
