const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Nav oeffnen
    nav.classList.toggle('nav-active');
    //Burger ANIMATION
    burger.classList.toggle('toggle');
    //Schriften animieren
    navLinks.forEach((link, index) => {
      if (link.style.animation) {

      } else {
        link.style.animation = 'navLinkFade 0.5s ease forwards';
      }
      //bug to fix
      // ${index / 5 + 0.3}s
  });


  });

}

navSlide();
