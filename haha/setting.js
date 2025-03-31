document.addEventListener('DOMContentLoaded', function() {
  const settingsBtn = document.getElementById("settings-btn");
  const dropdown = document.getElementById("settings-dropdown");

  // Toggle dropdown with animation
  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });

  // Prevent dropdown from closing when clicking inside
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Add ripple effect to buttons
  settingsBtn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});


// Set up sidebar active state
function setupSidebar() {
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.sidebar nav li');
  
  navItems.forEach(item => {
      const link = item.querySelector('a');
      if (link.getAttribute('href') === currentPage) {
          item.classList.add('active');
      }
      
      // Smooth transitions for sidebar items
      link.addEventListener('click', function(e) {
          if (!this.getAttribute('href').startsWith('#')) {
              e.preventDefault();
              document.body.style.opacity = '0.5';
              document.body.style.transition = 'opacity 0.3s ease';
              
              setTimeout(() => {
                  window.location.href = this.getAttribute('href');
              }, 300);
          }
      });
  });
}