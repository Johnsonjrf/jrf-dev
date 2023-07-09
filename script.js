// activate menu button
let menuBtn = document.querySelector("#menu-btn");
let menuBar = document.querySelector(".menu-bar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("bx-x")
    menuBar.classList.toggle("active")
    // setTimeout(new Audio("audio.mp3").play(), 5000)
    
})

// remove menubar on scroll

window.onscroll = () => {
    menuBtn.classList.remove("bx-x")
    menuBar.classList.remove("active")
}

document.addEventListener("DOMContentLoaded", () => {
   
    var audio = new Audio('welcome.aac');
    audio.play();
    
    
})

const appHeight = () => {
    const currentHeight = window.innerHeight
    document.body.style.height = `${currentHeight}px`;
  }
  
  window.addEventListener('resize', appHeight);
  appHeight();


// scroll Reveal

ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin: 'left'})
ScrollReveal().reveal('.home-bio p, .about-text', {origin: 'right'})
ScrollReveal().reveal('.home-bio h1, .heading', {origin: 'top'})
ScrollReveal().reveal('.profile-pic, .about-items, .projects-items, .skills-items, .form', {origin: 'bottom'})


// Typing animation

const mainText = new Typed('.animated-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Data Analyst'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});


// Greeting the sender personally
document.querySelector(".sender-name").addEventListener("input", () => {
    const senderNameInput = document.querySelector(".sender-name")
    const senderName = senderNameInput.value
    if(senderName.length === 0) {
        document.querySelector(".greeting").innerHTML = ""
    } else {
        document.querySelector(".greeting").innerHTML = "Hello " + senderName + ", I really can't wait to hear from you.";
    }
    
})

function feedbackMsg () {
    const inputs = document.querySelectorAll("input")
    document.querySelector(".msg-submitted-success").innerHTML = "Your Message was sent successfully";
    setTimeout(function() {
        document.querySelector(".msg-submitted-success").innerHTML = " ";
        for (let i = 0; i < inputs.length - 1; i++) {
            inputs[i].value = " "
        };
        document.querySelector(".textarea").value = ""
        document.querySelector(".greeting").innerHTML = ""

    }, 3000)
}

// Submit formdata to the google sheets
const formElement = document.querySelector(".form");
formElement.addEventListener("submit", (e) => {
    
    const formData = new FormData(formElement)
    fetch("https://script.google.com/macros/s/AKfycbwfvlKM73rOcat9znYshrJhxkT-m0qy-u5C66BBIM_73hIT0tZkXcqJ-ZQ_uxegeMvq/exec", {
        method: "POST",
        body: formData
    }).then((res) => res.json()).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })

    // feedbackMsg()
    setTimeout(feedbackMsg, 3000)
    e.preventDefault()
    
    
})

