document.addEventListener("DOMContentLoaded", () => {
    
    // Efeito de flutuação no logo principal
    const logo = document.querySelector('.logo-container');
    
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        // Faz o logo subir levemente mais devagar que o resto
        logo.style.transform = `translateY(${scrollValue * 0.2}px)`;
        logo.style.opacity = 1 - (scrollValue / 300);
    });

    // Reveal suave dos cards de preço
    const cards = document.querySelectorAll('.price-column');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});