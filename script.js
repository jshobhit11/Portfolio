// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation when element is in viewport
  function animateSection() {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.style.opacity = 1;
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", animateSection);
});
