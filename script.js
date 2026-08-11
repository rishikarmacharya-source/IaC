document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  // Dark/Light Theme Switching
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      themeToggleBtn.textContent = 'Light Mode';
    } else {
      themeToggleBtn.textContent = 'Dark Mode';
    }
  });

  // Contact Form Submission Handling
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    
    // Simulate sending data
    formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear form fields
    contactForm.reset();

    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  });
});