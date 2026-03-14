const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

faders.forEach(el=>observer.observe(el));

/* Smooth Hero Slider */

const slides = document.querySelectorAll(".hero-slide");

let index = 0;

function showNextSlide(){

slides[index].classList.remove("active");

index = (index + 1) % slides.length;

slides[index].classList.add("active");

}

setInterval(showNextSlide, 4000);