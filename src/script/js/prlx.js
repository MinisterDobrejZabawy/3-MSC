(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const images = [
        document.querySelector("#image1"),
        document.querySelector("#image2"),
        document.querySelector("#image3"),
        document.querySelector("#image4")
    ];

    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        images.forEach((image, index) => {
            let speedX = (index - 1) * 0.0005; // Prędkość w poziomie
            let speedY = (index - 1) * 0.01; // Prędkość w pionie
            let _depthX = `${50 - (_mouseX - _w) * speedX}%`;
            let _depthY = `${50 - (_mouseY - _h) * speedY}%`;
            image.style.backgroundPosition = `${_depthX} ${_depthY}`;
        });
    }
})();
