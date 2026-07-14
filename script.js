const overlay = document.getElementById("overlay");
const bg = document.querySelector(".bg");
const card = document.querySelector(".card");

const toggle = document.getElementById("toggle");
const less = document.getElementById("less");
const about = document.getElementById("about");

overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.remove();
    }, 800);

    bg.style.filter = "blur(0px)";
    card.style.opacity = "1";
});

// View More
toggle.addEventListener("click", () => {
    about.classList.add("show");
    toggle.style.display = "none";
});

// View Less
less.addEventListener("click", () => {
    about.classList.remove("show");

    setTimeout(() => {
        toggle.style.display = "inline-block";
    }, 300);
});

// ===============================
// Visitor Counter (CountAPI)
// ===============================

const namespace = "noximii-site";
const key = "views";

fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(response => response.json())
    .then(data => {
        const counter = document.getElementById("count");

        let current = parseInt(counter.textContent) || 500;
        const target = data.value + 500;

        const interval = setInterval(() => {
            current++;

            counter.textContent = current;

            if (current >= target) {
                clearInterval(interval);
            }
        }, 15);
    })
    .catch(() => {
        document.getElementById("count").textContent = "517";
    });