// script.js
document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.querySelector('.spinner');
      
    // Simulating content load
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 2000); // Hide spinner after 2 seconds
  
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
