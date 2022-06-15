let loader  = document.getElementById('loader-animation');
let heroSection = document.getElementById('hero-section');
let firstSection = document.getElementById('HeroSection')

setTimeout(
    function (){
        loader.remove();
    },4500);


new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,

});


let fullpageWm = document.querySelector('.fp-watermark');
fullpageWm.remove();

document.getElementById('#fullpage').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}