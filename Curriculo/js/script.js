// 1. Seleciona os elementos
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const mainContent = document.querySelector('#content-area');

// 2. Configura o observador
const options = {
  root: mainContent, // IMPORTANTE: o scroll acontece aqui, não no body
  threshold: 0.6,    // 60% da seção precisa estar visível para ativar
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove a classe 'active' de todos os links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Adiciona a classe 'active' ao link que aponta para a seção visível
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, options);

// 3. Começa a observar cada seção
sections.forEach(section => observer.observe(section));