// Navbar

let navBar = document.getElementById('navBar');

window.addEventListener("scroll", () => {
    if(window.scrollY == 0){
        navBar.style.background = 'none';
        navBar.style.height = '5rem';
    }else{
        navBar.style.background = '#0D6EFD';
        navBar.style.height = '7rem';
    }
}, { passive: true })