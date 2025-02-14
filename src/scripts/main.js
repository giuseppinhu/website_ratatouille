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
