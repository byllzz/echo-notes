
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });



  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden-section').forEach(section => {
  observer.observe(section);
});


// page refresh

function refresh () {
  const url = 'index.html'; //main index
  document.location.href = url;
};