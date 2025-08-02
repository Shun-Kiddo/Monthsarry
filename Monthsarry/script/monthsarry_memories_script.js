  const hero = document.querySelector('.hero');
  const images = [
    'img/picture11.jpg',
    'img/picture12.jpg',
    'img/picture14.jpg',
    'img/beach.jpg',
  ];
  let index = 0;
  function showSlide(i) {
    hero.style.opacity = 0; 
    setTimeout(() => {
      hero.style.backgroundImage = `url('${images[i]}')`;
      hero.style.opacity = 1; 
    }, 500); 
  }
  function nextSlide() {
    index = (index + 1) % images.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  }
  setInterval(nextSlide, 3000);
  showSlide(index);
   
  const nav = document.querySelector('.nav-menu');
  function toggleMenu() {
    nav.classList.toggle('active'); 
  }

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

const sections = document.querySelectorAll('#home, #memories, #message');
window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    const sectionHeight = section.offsetHeight;
    console.log(pageYOffset )
    if(pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

  window.addEventListener('scroll', function() {
  const topSection = document.querySelector('.big-font');
  const hero = document.querySelector('.hero');
  if (window.scrollY > 50) {
    topSection.classList.add('scrolled');
  } else {
    topSection.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  const triggerTop = 50;

  const elements = [
    document.querySelector('.title'),
    document.querySelector('.memories-title'),
    document.querySelector('.message-title')
  ];

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    el.style.opacity = (rect.top <= triggerTop) ? '0' : '1';
  });
});