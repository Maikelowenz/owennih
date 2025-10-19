document.addEventListener("DOMContentLoaded", function() {

    // ==== 1. ANIMASI NAVIGASI SAAT SCROLL ====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==== 2. ANIMASI EFEK KETIK (TYPING EFFECT) ====
    const typingElement = document.querySelector('.typing-effect');
    
    const words = ["Creative Developer", "Web Architect", "UI/UX Enthusiast", "Code Wizard"]; 
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        const typeSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typeSpeed);
    }
    
    type();

    // 
    //  --- LOGIKA MOUSE GLOW ORB DIHAPUS DARI SINI ---
    // 

    // ==== 3. (BARU) LOGIKA "MAGIC" HERO SPOTLIGHT ====
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            // Dapatkan posisi mouse relatif terhadap elemen hero
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set variabel CSS
            hero.style.setProperty('--mouse-x', `${x}px`);
            hero.style.setProperty('--mouse-y', `${y}px`);
        });
    }

});