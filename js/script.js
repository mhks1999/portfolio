document.addEventListener("DOMContentLoaded", () => {

const scrollBtn = document.getElementById("scrollTopBtn");
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('a[href^="#"]');



/* -------------------------
   smooth scrolling
-------------------------- */

links.forEach(link => {

link.addEventListener("click", e => {

const targetId = link.getAttribute("href");

if (targetId.startsWith("#")) {

e.preventDefault();

const target = document.querySelector(targetId);

if (target) {

target.scrollIntoView({
behavior: "smooth"
});

}

/* close mobile menu after click */

navLinks.classList.remove("open");

}

});

});



/* -------------------------
   scroll to top button
-------------------------- */

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

scrollBtn.classList.add("show");

} else {

scrollBtn.classList.remove("show");

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});



/* -------------------------
   mobile menu toggle
-------------------------- */

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("open");

});

});
