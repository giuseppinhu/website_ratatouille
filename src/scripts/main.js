document.addEventListener("DOMContentLoaded", function () {
    const itensMenu = document.querySelectorAll(".menu__list__item");
    const image = document.querySelector(".scroll--is-faded");

    function handleScroll() {
        const windowHeight = window.innerHeight;

        itensMenu.forEach((item) => {
            if (item.getBoundingClientRect().top < windowHeight * 0.9) {
                item.classList.add("show");
            }
        });

        if (image) {
            const rect = image.getBoundingClientRect();
            image.style.opacity = rect.top >= 0 && rect.bottom <= windowHeight ? 1 : Math.max(1 - (rect.top / windowHeight) * 1.2, 0);
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
