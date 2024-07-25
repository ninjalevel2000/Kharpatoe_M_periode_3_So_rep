document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            section.style.opacity = '1';
        }, 300 * index);
    });
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item, index) => {
        item.style.transform = 'translateY(-20px)';
        item.style.opacity = '0';
        item.style.transition = 'all 0.3s ease-in-out';
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        }, 100 * index);
    });
    const overMijText = document.querySelector('#over-mij p');
    if (overMijText) {
        const text = overMijText.textContent;
        overMijText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                overMijText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
            section.style.transition = 'box-shadow 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = 'none';
        });
    });
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('mouseenter', () => {
            whatsappButton.style.transform = 'rotate(5deg) scale(1.05)';
            whatsappButton.style.transition = 'transform 0.3s ease';
        });
        whatsappButton.addEventListener('mouseleave', () => {
            whatsappButton.style.transform = 'rotate(0) scale(1)';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const programItems = document.querySelectorAll('.program');
    
    programItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); 
});