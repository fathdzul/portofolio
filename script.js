// Script for interactions if necessary
console.log("Brutalist Portfolio Loaded. 🚀");

document.addEventListener("DOMContentLoaded", () => {
    // Optional: Add simple staggered reveal to brutal boxes if they are in viewport
    const boxes = document.querySelectorAll('.brutal-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Just ensuring it's visible, the brutalism style doesn't need much generic smooth transition,
                // But a blocky entrance could be cool. For now, we leave it static and bold.
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    boxes.forEach(box => {
        // Prepare boxes if we want entrance animations:
        // box.style.opacity = '0'; 
        // observer.observe(box);
    });
});
