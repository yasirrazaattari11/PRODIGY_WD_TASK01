// Function to handle the scroll event
function handleScroll() {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 100) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);
