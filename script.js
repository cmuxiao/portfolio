// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Smooth scrolling for navigation links with dynamic offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calculate the height of the navigation bar dynamically
      const navHeight = document.querySelector('nav').offsetHeight;
      const offset = navHeight + 20; // Add a small buffer (e.g., 20px)

      // Get the target element's position relative to the document
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Scroll to the target element with the offset
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Progress Bar
window.onscroll = () => {
  const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = `${scrollProgress}%`;
};

// Show More/Less functionality for project descriptions
document.querySelectorAll('.show-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.previousElementSibling;
    const isExpanded = description.classList.contains('expanded');
    
    description.classList.toggle('expanded');
    this.textContent = isExpanded ? 'Show more' : 'Show less';
  });
});

// Project filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projects.forEach(project => {
        if (filter === 'all') {
          project.style.display = 'flex';
        } else {
          const projectTags = Array.from(project.querySelectorAll('.project-tag'))
            .map(tag => tag.textContent.toLowerCase());
          
          if (projectTags.includes(filter.toLowerCase())) {
            project.style.display = 'flex';
          } else {
            project.style.display = 'none';
          }
        }
      });
    });
  });
});


