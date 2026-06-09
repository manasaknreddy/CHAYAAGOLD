function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".bg-slide");
let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 3000);


/* ================= NAVBAR SCROLL ================= */
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("scrolled", window.scrollY > 50);
});


/* ================= PREMIUM SCROLL REVEAL ================= */

const revealItems = document.querySelectorAll(
    ".reveal, .why-text, .why-image, .why-slider"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const index = [...revealItems].indexOf(entry.target);

            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150); // premium stagger effect

            revealObserver.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.2
});

revealItems.forEach(el => revealObserver.observe(el));




function createLeaf() {

    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    leaf.innerHTML =
        `<img src="https://img.icons8.com/color/48/natural-food.png">`;

    leaf.style.left = Math.random() * 100 + "%";

    const size = Math.random() * 18 + 20;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    const duration = Math.random() * 5 + 6;
    leaf.style.animationDuration = duration + "s";

    document.querySelector(".leaf-container").appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

setInterval(createLeaf, 1800);