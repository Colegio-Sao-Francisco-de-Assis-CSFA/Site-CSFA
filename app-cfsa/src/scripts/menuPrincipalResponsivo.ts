
// add classes for mobile navigation toggling
const CSbody = document.querySelector("body") as HTMLBodyElement;
const CSnavbarMenu = document.querySelector("#cs-navigation") as HTMLDivElement;
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle") as HTMLButtonElement;

CShamburgerMenu.addEventListener('click', () => {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();   

});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded') as HTMLUListElement;
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded',   
    'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body')?.classList.add('scroll');
    } else {
        document.querySelector('body')?.classList.remove('scroll');
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown')) as HTMLDivElement[];
dropDowns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('cs-active');
    });
});