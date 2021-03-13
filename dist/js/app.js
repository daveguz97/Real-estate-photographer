// Animation library that allows you to create all sorts of animations
const animationOnScroll = () => {
    AOS.init();
};

// When the user scrolls the nav will have a fixed position on the top
const stickyNav = () => {
    const nav = document.querySelector('.navbar');
    const topOfNav = nav.offsetTop;

    const fixNav = () => {
        if (window.scrollY >= 81) {
            nav.classList.add('fixed-nav')
        }
        else {
            nav.classList.remove('fixed-nav')
        }
    };

    window.addEventListener('scroll', fixNav);
};

// Initialize all my functions
const app = () => {
    animationOnScroll();
    stickyNav();
};

app();
