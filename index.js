 // Counter animation function
 function animateCounter(element, target) {
    let current = 0;
    const duration = 2000; // 2 seconds
    const step = (timestamp) => {
        if (!element.startTime) element.startTime = timestamp;
        const progress = timestamp - element.startTime;
        const percentage = Math.min(progress / duration, 2);
        
        current = Math.floor(target * percentage);
        element.textContent = current;

        if (percentage < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

// Intersection Observer to start animation when elements are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.1
});

// Observe all counter elements
document.querySelectorAll('.stat-number').forEach(counter => {
    observer.observe(counter);
});