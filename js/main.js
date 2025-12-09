// ✅ DARK / LIGHT MODE
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode")
    ? "🌞"
    : "🌙";
});

// ✅ BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener(
  "scroll",
  () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  },
  { passive: true }
);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("mobile-open");
});

// ✅ NAVBAR SCROLL EFFECT
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  },
  { passive: true }
);

// ✅ REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < triggerPoint) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", revealOnScroll);
