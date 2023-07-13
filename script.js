// activate menu button
let menuBtn = document.querySelector("#menu-btn");
let menuBar = document.querySelector(".menu-bar");
const emailError = document.querySelector(".email-error")
const msgError = document.querySelector(".msg-error")
const nameError = document.querySelector(".name-error")

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

// play audio when window load
window.onload = () => {
    var audio = new Audio('welcome.aac');
    audio.play();
}

// document.addEventListener("DOMContentLoaded", () => {
   
    
    
    
// })

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
        document.querySelector(".msg-submitted-success").innerHTML = "";
        for (let i = 0; i < inputs.length - 1; i++) {
            inputs[i].value = ""
        };
        document.querySelector(".textarea").value = ""
        document.querySelector(".greeting").innerHTML = ""

    }, 3000)
}

// form-validation
document.getElementById("submit").addEventListener("click", (e) => {
    var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
    const emailText = document.querySelector(".email")
    
    const msgText = document.querySelector(".textarea")
    
    const nameText = document.querySelector(".sender-name")
    
    
// check if the email is valid
    if(regExp.test(emailText.value)){
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "Please enter a valid email address"
    }

// check if inputs are not empty

    if (msgText.value.length > 0) {
        msgError.innerHTML = ""
    } else {
        msgError.innerHTML = "this field can't be empty"
    }

    if(nameText.value.length > 0){
        nameError.innerHTML = ""
    } else{
        nameError.innerHTML ="i will like to know your name"
    }

    // $('[type="email"]').on('keyup', function() {
    //   $('.message').hide();
    //   regExp.test( $(this).val() ) ? $('.message.success').show() : $('.message.error').show();
    // });
})

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
    if(emailError.innerHTML === "" && nameError.innerHTML === "" && msgError.innerHTML === "") {
        setTimeout(feedbackMsg, 3000)
    }
    
    e.preventDefault()
    
    
})






