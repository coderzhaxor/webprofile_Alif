const navMenu = document.querySelectorAll('nav .nav-menu a');
const sections = document.querySelectorAll('section');

function setActiveLink(linkId) {
    navMenu.forEach(menuLink => {
        if (menuLink.getAttribute("href") === `#${linkId}`) {
            menuLink.classList.add("active");
        } else {
            menuLink.classList.remove("active");
        }
    });
}

function scrollSpy() {
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        setActiveLink(current);
    });
}

scrollSpy();
