//Untuk MultiText
var typingEffect = new Typed(".multiText", {
  strings: [
    "Unleash Limitless Technology",
    "Breaking Boundaries with Technology",
    "Empowering Technology Beyond Borders",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1500,
});

//Untuk ScrollSpy
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//Untuk Next Button
const sections = document.querySelectorAll("section");
const navHeight = document.querySelector("nav").offsetHeight;
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  let currentSection = null;
  let nextSection = null;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top - navHeight >= 0 && !nextSection) {
      nextSection = section;
    }
    if (rect.top - navHeight <= 0) {
      currentSection = section;
    }
  });
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  } else {
    sections[0].scrollIntoView({ behavior: "smooth" });
  }
});

//Untuk Slide Section Future
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-Slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-class2", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-class2";
}
