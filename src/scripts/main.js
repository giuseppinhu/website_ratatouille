document.addEventListener("DOMContentLoaded", function(){
    const itensMenu = document.querySelectorAll('.menu__list__item');

    function checkScroll(){
        itensMenu.forEach((item) => {
            const valueTop = item.getBoundingClientRect();
            
            if (valueTop.top < window.innerHeight * 0.9) {
                item.classList.add("show");
            }
        });
        
    };
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("scroll", function () {
    const image = document.querySelector(".scroll--is-faded");
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        image.style.opacity = 1;
    } else {
        let opacity = 1 - (rect.top / windowHeight) * 1.2;
        opacity = Math.max(opacity, 0);
        image.style.opacity = opacity;
    }
});
