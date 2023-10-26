
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    const closeMobileBtn = document.getElementById('closeMobileBtn');


    closeMobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active-menu')
    })

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active-menu')
    })

})





