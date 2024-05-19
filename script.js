document.addEventListener('DOMContentLoaded', () => {
    // Function to check if an element is in viewport
    const isInViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Add 'visible' class to elements in viewport
    const revealElements = () => {
      document.querySelectorAll('.animated').forEach((elem) => {
        if (isInViewport(elem)) {
          elem.classList.add('visible');
        }
      });
    };
  
    // Initial check
    revealElements();
  
    // Check on scroll
    window.addEventListener('scroll', revealElements);
  });
  