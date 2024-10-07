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

    const navLinks = document.querySelectorAll('.nav-link-item');

    const currentUrl = window.location.href;

    navLinks.forEach(link =>{
        if(currentUrl.includes(link.href)){
            navLinks.forEach(item => item.classList.remove('active-link'))
            link.classList.add('active-link')
        }
    });
     
    const sendMessage = document.querySelector('.contact-form'); // Targeting the form
    const responseDiv = document.getElementById('message-response');

    sendMessage.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show the response message
        responseDiv.style.display = 'block';

        // Hide the message after 3 seconds
        setTimeout(function() {
            responseDiv.style.display = 'none';
            sendMessage.submit();
         
        }, 3000);
       
    });
})