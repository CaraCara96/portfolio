document.addEventListener("DOMContentLoaded", function(){
    const navbarToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('mob-menu');
    const navToggleIcon = document.getElementById('nav-toggle');

    navbarToggle.addEventListener('click', function(){
        navMenu.style.display = 'block';
        setTimeout(()=>{
            navMenu.classList.toggle('active');

            if(navMenu.classList.contains('active')){
                navToggleIcon.innerHTML = '<i class="fas fa-times" style="color:#e74c3c;"></i>';
            }
            else {
                navToggleIcon.innerHTML = '<i class="fas fa-bars"></i>'; 
              
            }
        }, 200);
    })
})