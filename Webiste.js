// Example of a JavaScript function that could be used for interaction
// For demonstration purposes, let's say you want to display a message when a section is clicked


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.team-member').forEach(member => {
        // Mouse enters the .team-member area
        member.addEventListener('mouseenter', () => {
            const info = member.querySelector('.member-info');
            info.style.display = 'block'; // Show the member info
        });

        // Mouse leaves the .team-member area
        member.addEventListener('mouseleave', () => {
            const info = member.querySelector('.member-info');
            info.style.display = 'none'; // Hide the member info
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.team-member').forEach(member => {
      // Mouse enters the .team-member area
      member.addEventListener('mouseenter', () => {
          const info = member.querySelector('.member-info');
          info.style.display = 'block'; // Show the member info
      });

      // Mouse leaves the .team-member area
      member.addEventListener('mouseleave', () => {
          const info = member.querySelector('.member-info');
          info.style.display = 'none'; // Hide the member info
      });
  });
});





document.querySelector('.menu-toggle').addEventListener('click', () => {
  if (window.innerWidth <= 1000) { // Checks if the screen width is 1000px or less
      const navLinks = document.querySelector('.nav-links');
      if (navLinks.style.display === 'none' || navLinks.style.display === '') {
          navLinks.style.display = 'flex'; // Ensure the menu is display:flex when active
          setTimeout(() => navLinks.classList.add('active'), 10); // Slight delay to allow display:flex to apply before transition
      } else {
          navLinks.classList.remove('active');
          setTimeout(() => navLinks.style.display = 'none', 700); // Matches the transition duration
      }
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Get current page URL
  const currentPage = window.location.pathname.split("/").pop();

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-links a');

  // Loop through all links
  navLinks.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
          // Add class to the current page link
          link.classList.add('current-page');
      }
  });
});


let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }


document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu visibility on small screens
  document.querySelector('.menu-toggle').addEventListener('click', () => {
      if (window.innerWidth <= 1000) {
          const navLinks = document.querySelector('.nav-links');
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              setTimeout(() => {
                  navLinks.style.display = 'none';
              }, 300); // Allow time for transition
          } else {
              navLinks.style.display = 'flex';
              setTimeout(() => navLinks.classList.add('active'), 10);
          }
      }
  });

  // Handle dropdowns on small screens
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownTrigger = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdownTrigger.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action, especially if it's a link

        // Toggle the active state of the dropdown
        dropdown.classList.toggle('active');

        // Close other dropdowns if one is opened
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
    });
});

  // // Hide dropdowns if user clicks outside
  // document.addEventListener('click', function(e) {
  //     if (window.innerWidth <= 1000) {
  //         const target = e.target;
  //         if (!target.closest('.dropdown')) {
  //             dropdowns.forEach(dropdown => {
  //                 dropdown.classList.remove('active');
  //             });
  //         }
  //     }
  // });
});


