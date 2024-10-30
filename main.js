const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const hamburgerIcon = document.querySelector(".hamburger i");
const audio = document.getElementById("background-audio");
const musicIcon = document.getElementById("music-icon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Toggle between hamburger and cross icon
  if (menu.classList.contains("active")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  } else {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  }
});

let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index); // Toggle active class for dots
  });

  currentIndex = index;

  // Reset the auto-slide timer
  clearInterval(autoSlideInterval); // Clear existing interval
  autoSlideInterval = setInterval(autoSlide, 5000); // Start a new interval
}

function currentSlide(index) {
  showSlide(index - 1);
}

function autoSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Initialize the auto-slide timer when the page loads
autoSlideInterval = setInterval(autoSlide, 5000);

// Initialize the first slide
showSlide(currentIndex);

// Add click event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

musicIcon.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    musicIcon.classList.replace("fa-volume-mute", "fa-music");
    audio.play();
  } else {
    audio.muted = true;
    musicIcon.classList.replace("fa-music", "fa-volume-mute");
  }
});

const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  reset: true,
});

sr.reveal("#logo", { reset: false });
sr.reveal(".menu", { delay: 350, reset: false });
sr.reveal(".icons", { delay: 350, reset: false });
sr.reveal(".container1");
sr.reveal(".container-About");
sr.reveal("#container-5");
sr.reveal("footer");
