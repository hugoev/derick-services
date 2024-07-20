// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('toggleMode');
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.about-content img, .about-content p').forEach(item => {
        observer.observe(item);
    });

    // Tooltip
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = 'Click for more info';
            card.appendChild(tooltip);
        });

        card.addEventListener('mouseleave', () => {
            const tooltip = card.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Floating Action Button
    const fab = document.querySelector('.fab');
    fab.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const toggleMode = document.getElementById('toggleMode');
    const body = document.body;
    const bgVideo = document.getElementById('bgVideo');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    toggleMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Programmatically play the video to ensure it starts on mobile devices
    bgVideo.play().catch(error => {
        console.error('Video playback failed:', error);
    });
});
