
  
  document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const aboutMe = document.querySelector('#about-me');
    
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + windowHeight;
      
      projects.forEach(project => {
        const projectRect = project.getBoundingClientRect();
        const projectTop = projectRect.top + window.scrollY;
        const projectBottom = projectTop + projectRect.height;
        
        if (projectBottom > windowTop && projectTop < windowBottom) {
          project.classList.add('visible');
        } else {
          project.classList.remove('visible');
        }
      });
      
      // Check visibility for the "Sobre Mim" section
      const aboutMeRect = aboutMe.getBoundingClientRect();
      const aboutMeTop = aboutMeRect.top + window.scrollY;
      const aboutMeBottom = aboutMeTop + aboutMeRect.height;
      
      if (aboutMeBottom > windowTop && aboutMeTop < windowBottom) {
        aboutMe.classList.add('visible');
      } else {
        aboutMe.classList.remove('visible');
      }
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on load
  });
  document.addEventListener('DOMContentLoaded', function() {
      const introText = document.querySelector('.intro-text');
      const gifContainer = document.querySelector('.gif-container');
      
      function checkVisibility() {
          const windowHeight = window.innerHeight;
          const windowTop = window.scrollY;
          const windowBottom = windowTop + windowHeight;
          
          // Check visibility for the intro text
          const introTextRect = introText.getBoundingClientRect();
          const introTextTop = introTextRect.top + window.scrollY;
          const introTextBottom = introTextTop + introTextRect.height;
          
          if (introTextBottom > windowTop && introTextTop < windowBottom) {
              introText.classList.add('visible');
          } else {
              introText.classList.remove('visible');
          }
          
          // Check visibility for the gif container
          const gifContainerRect = gifContainer.getBoundingClientRect();
          const gifContainerTop = gifContainerRect.top + window.scrollY;
          const gifContainerBottom = gifContainerTop + gifContainerRect.height;
          
          if (gifContainerBottom > windowTop && gifContainerTop < windowBottom) {
              gifContainer.classList.add('visible');
          } else {
              gifContainer.classList.remove('visible');
          }
      }
      
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);
      checkVisibility(); // Initial check to handle elements already in view on load
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const projectsSection = document.querySelector('#projects');

      function checkVisibility() {
          const sectionTop = projectsSection.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;

          if (sectionTop < viewportHeight * 0.8) { // Ajuste o valor para controlar quando a animação deve acontecer
              projectsSection.classList.add('visible');
          } else {
              projectsSection.classList.remove('visible');
          }
      }

      // Verifica a visibilidade ao rolar a página
      window.addEventListener('scroll', checkVisibility);

      // Verifica a visibilidade ao carregar a página
      checkVisibility();
  });
