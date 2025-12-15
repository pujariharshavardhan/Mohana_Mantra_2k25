document.addEventListener("DOMContentLoaded", () => {
    const sponsors = document.querySelectorAll(".sponsor");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSponsors() {
        sponsors.forEach((sponsor, index) => {
            if (isElementInViewport(sponsor)) {
                sponsor.style.animationDelay = `${index * 0.1}s`;
                sponsor.style.opacity = "1";
            }
        });
    }

    function addRandomMovement() {
        const speechBubbles = document.querySelectorAll(".speech-bubble");
        speechBubbles.forEach((bubble) => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            bubble.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

    window.addEventListener("scroll", animateSponsors);
    window.addEventListener("resize", animateSponsors);
    animateSponsors();

    setInterval(addRandomMovement, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    // Animated Counter
    let count = 0;
    const totalSponsors = 11; // Change this based on actual count
    const counterElement = document.getElementById("sponsor-counter");
    const interval = setInterval(() => {
        if (count < totalSponsors) {
            count++;
            counterElement.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100);

    // Sponsor Spotlight Animation
    const sponsors = [
        { name: "TechCorp", description: "Leading the way in technology innovation.", img: "images/image.png" },
        { name: "InnovateCo", description: "Pioneering the future of AI.", img: "images/ilogo.png" },
        { name: "FutureTech", description: "Building the next generation of software.", img: "images/micro.jpg" },
    ];
    
    let index = 0;
    function updateSpotlight() {
        const spotlight = document.getElementById("spotlight");
        const name = document.getElementById("spotlight-name");
        const desc = document.getElementById("spotlight-description");
        const img = spotlight.querySelector("img");
        
        name.textContent = sponsors[index].name;
        desc.textContent = sponsors[index].description;
        img.src = sponsors[index].img;
        
        index = (index + 1) % sponsors.length;
    }
    setInterval(updateSpotlight, 3000);
});