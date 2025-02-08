// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;

  // Get all elements with data-speed attribute
  const elements = document.querySelectorAll('[data-speed]');

  elements.forEach(function(element) {
      const speed = parseFloat(element.getAttribute('data-speed')); // Get speed from data-speed attribute
      const offset = scrollTop * speed;

          element.style.transform = `translateY(-${offset}px)`;
  });
});

// var tlm = gsap.timeline({scrollTrigger:{
//   trigger:".card-div",
//   start: "-33% 35%",
//   end: "3% 6%",
//   scrub:true,
//   // markers:true,
//   //!ana thi scroll bar trigar thase pan sectione nahi hale 
// }})

// tlm.to(".cards-left",{
//   opacity: 1,
//   y: -40,
//   animationDuration: "0.1s"
// },`a`)


// tlm.to(".cards-right",{
//   // delay:0.1,
//   opacity: 1,
//   y: -40,
//   animationDuration: "0.2s"
// },`b`)


// tlm.to(".card3",{
//   // delay:0.1,
//   opacity: 1,
//   y: -40,
//   animationDuration: "0.2s"
// },`c`)



const body = document.body;
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
});


const dayNight =  document.querySelector(".day-night");
dayNight.addEventListener("click" , () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
      dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
      dayNight.querySelector("i").classList.add("fa-sun");
    }
})