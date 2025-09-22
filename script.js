// Rolagem suave nos links do menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Botão CTA que leva até a seção "Sobre"
document.getElementById('btn-cta').addEventListener('click', () => {
  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Dark Mode
const toggleDarkMode = document.getElementById('dark-mode-toggle');
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
