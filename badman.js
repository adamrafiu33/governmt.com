const navSlide = () => {
    const lines = document.querySelector('.lines');
    const navList = document.querySelector('.nav-list');
    const links = document.querySelectorAll('.nav-list li');
        lines.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }
            else{
                link.style.animation = `navFadeLink 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        lines.classList.toggle("toggle");
    });
}
navSlide();