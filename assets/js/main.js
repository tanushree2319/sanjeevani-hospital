/* Fade Animation */
const faders = document.querySelectorAll(".fade-up");

if (faders.length > 0) {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  });

  faders.forEach(el=>observer.observe(el));
}


/* Hero Slider */
const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {
  let index = 0;

  function showNextSlide(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
}


/* WhatsApp Form */
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("appointmentForm");

  if(form){
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let department = document.getElementById("department").value;
        let message = document.getElementById("message").value;

        if(name === "" || phone === "" || date === ""){
            alert("Please fill required fields");
            return;
        }

        let whatsappMessage = `New Appointment Request:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Date: ${date}%0A
Department: ${department}%0A
Message: ${message}`;

        let url = `https://wa.me/919822234434?text=${whatsappMessage}`;

        window.open(url, "_blank");
    });
  }

});