let prlx0 = document.getElementById('PrlxBackground');
let prlx1 = document.getElementById('PrlxStars');
let prlx2 = document.getElementById('PrlxMoon');
let prlx3 = document.getElementById('PrlxSanta');
let prlx4 = document.getElementById('PrlxBackTrees');
let prlx5 = document.getElementById('PrlxFrontTrees');
let prlx6 = document.getElementById('PrlxLogo');
let prlx7 = document.getElementById('PrlxMountains');
let prlx8 = document.getElementById('Snow')
let prlx9 = document.getElementById('Snow2')
let prlx10 = document.getElementById('Radio')
let prlx11 = document.getElementById('PrlxFront')


document.addEventListener('scroll', function(){
    let value = window.scrollY;

    prlx1.style.bottom = value * 3 + 'px';
    prlx2.style.top = value * 0.8 + 'px';
    prlx3.style.left = value * 0.9 + 'px';
    prlx3.style.top = value * 0.7 + 'px';
    prlx4.style.top = value * 0.4 + 'px';
    prlx5.style.top = value * 0.2 + 'px';
    prlx6.style.top = value * 1 + 'px';
    prlx7.style.top = value * 0.55 + 'px';
    prlx8.style.top = value * 0.6 + 'px';
    prlx9.style.top = value * 0.15 + 'px';
    prlx11.style.bottom = value * 0.001 + 'px';

})

