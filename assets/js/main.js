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

setInterval(showNextSlide, 3000);


/* ✅ WhatsApp Appointment Form */

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let department = document.getElementById("department").value;
    let message = document.getElementById("message").value;

    // ✅ Validation
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

    let whatsappNumber = "919822234434";

    let url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(url, "_blank");
});