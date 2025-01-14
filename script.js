//<------ Toggle Navbar----->
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menuIcon');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// <-----Active Link Section----->
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        // console.log(offSet);

        let id = sec.getAttribute('id');

        if(top>=offSet && top< offSet + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}
// console.log(sections.scrollY)
// console.log(sections.offsetHeight);



//<------ Scroll Reveal----->
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.introContent, .heading', { origin: 'top' });
ScrollReveal().reveal('.mainImg, .servicesContainer, .portfolioBox, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.introContent h1', { origin: 'left' });
ScrollReveal().reveal('.introContent p', { origin: 'right' });


// Myself Text typed

const typed = new Typed('.mySelf', {
    strings: ['Full Stack Developer','Full Stack Developer', 'Innovator', 'Coder and Learner'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


// SAVE CONTACT INFO
const scriptURL = 'https://script.google.com/macros/s/AKfycbw68Q-2oFi3d7Hx4_eTc_TZdWqwfuUavKbqUc9Ocr43wTF4QMcrd0d1SqDSQcx4a7YZ9w/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById('sentMsg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = "Message Sent Successfully!!";

       setTimeout(()=>{
        msg.innerHTML = ""
       },4000);
       form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
