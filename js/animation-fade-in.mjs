const targetedElements = document.querySelectorAll(".results-section-wrap");

targetedElements.forEach((target)=>{
  const observerFadeIn = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add('fade-in')
        target.classList.remove('fade-out')
      }else{
          target.classList.add('fade-out')
          target.classList.remove('fade-in')
      }
    });
  });
  
  observerFadeIn.observe(target);
})

