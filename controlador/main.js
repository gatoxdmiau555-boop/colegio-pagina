// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú responsivo
(function(){
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('primary-navigation');

  if(!toggle || !navbar) return;

  toggle.addEventListener('click', function(){
    const open = navbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Cerrar menú al hacer scroll o al cambiar de sección
  function handleScroll(){
    if(navbar.classList.contains('open')){
      navbar.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
    if(window.scrollY > 80){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Ejecutar al cargar para detectar si hay scroll inicial
  handleScroll();

  // Scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const toggleInfoButton = document.getElementById('toggle-contact-info');
  const extraContact = document.getElementById('extra-contact-info');
  if(toggleInfoButton && extraContact){
    toggleInfoButton.addEventListener('click', function(){
      const isHidden = extraContact.classList.toggle('hidden');
      this.textContent = isHidden ? 'Mostrar más información' : 'Ocultar información';
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  if(contactForm && formMessage){
    contactForm.addEventListener('submit', function(event){
      event.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if(!name || !email || !message){
        formMessage.textContent = 'Por favor completa todos los campos antes de enviar.';
        formMessage.style.color = '#b91c1c';
        return;
      }
      if(!emailValid){
        formMessage.textContent = 'Ingresa un correo válido, por ejemplo: nombre@ejemplo.com';
        formMessage.style.color = '#b91c1c';
        return;
      }

      const institutionEmail = 'comercial45@hotmail.com';
      const subject = encodeURIComponent(`Consulta desde ERP 45 - ${name}`);
      const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
      const mailtoLink = `mailto:${institutionEmail}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      formMessage.textContent = 'Éxito: el mensaje se envió correctamente. Revisa tu cliente de correo y confirma el envío.';

      formMessage.style.color = '#0f766e';
      contactForm.reset();
    });
  }
})();
