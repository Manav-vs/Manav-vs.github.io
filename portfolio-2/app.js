

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



function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

// avi j rite nava card loyo tyare navi script mukvani

function card2(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}



var tl = gsap.timeline({scrollTrigger:{
  trigger:".round-text",
  start:"0% 95%",
  end:"50% 5%",
  scrub:true,
}})

tl.to(".round-text-image",{
  rotate: "360deg"
})