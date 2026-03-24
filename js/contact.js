
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
        
        if (name.length < 2) {
            errorDiv.textContent = 'Veuillez indiquer votre nom';
            errorDiv.style.display = 'block';
            return;
        }
        
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorDiv.textContent = 'Veuillez indiquer une adresse email valide';
            errorDiv.style.display = 'block';
            return;
        }
        
        if (message.length < 10) {
            errorDiv.textContent = 'Votre message est trop court. Prenez le temps de détailler un peu plus.';
            errorDiv.style.display = 'block';
            return;
        }
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Envoi en cours...';
        
        setTimeout(function() {
            form.style.display = 'none';
            successDiv.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
        }, 1000);
    });
});