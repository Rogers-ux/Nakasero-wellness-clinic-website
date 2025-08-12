// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Highlight nav link based on current page URL
document.querySelectorAll('.nav-link').forEach(link => {
  // This helps on local files by comparing only pathname
  if (link.href.includes(window.location.pathname)) {
    link.classList.add('active');
  }
});

// Appointment form handling (basic client-side demo)
const form = document.getElementById('appointment-form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Here you can add AJAX or server integration

    const message = document.getElementById('form-message');
    message.textContent = "Thank you for booking! We will contact you soon.";
    form.reset();
  });
}
