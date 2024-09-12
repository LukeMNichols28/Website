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



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('publications-container');
  
    publications.forEach(pub => {
      const pubElement = document.createElement('div');
      pubElement.classList.add('publication');
      pubElement.innerHTML = `
        <div class="publication-title"><a href="${pub.doiLink}" target="_blank">${pub.title}</a></div>
        <div class="publication-authors">${pub.authors}</div>
      `;
      container.appendChild(pubElement);
    });
  });

fetch('publications.json')
.then(response => response.json())
.then(data => displayPublicationsGroupedByYear(data))
.catch(error => console.error('Error loading the publications:', error));

function displayPublicationsGroupedByYear(publications) {
  const publicationsContainer = document.getElementById('publications-container');
  publicationsContainer.innerHTML = ''; // Clear previous content

  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.publication_date.substring(0, 4); // Extract year from publication_date
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  // Sort years in descending order and display publications for each year
  Object.keys(publicationsByYear).sort((a, b) => b - a).forEach(year => {
    const yearSection = document.createElement('section');
    yearSection.innerHTML = `
    
    <div style = "color: white;">
    <h2>${year}</h2> <\div>`;
    publicationsByYear[year].forEach(pub => {
      const publicationElement = document.createElement('div');
      publicationElement.className = 'publication';

      let imageElement = '';
      if (pub.image && pub.image !== 'default') {
        imageElement = `<a href="${pub.doi}" target="_blank">
                          <img src="${pub.image}" alt="Cover image for ${pub.title}" class="publication-image">
                        </a>`;
      }

      publicationElement.innerHTML = `
        <div class="publication-box" style="opacity: 0.8;">
          <div class="publication-title"><a href="${pub.doi}" target="_blank">${pub.title}</a></div>
          <div class="publication-name">${pub.publication_name}</div>
          <div class="publication-authors">${pub.authors.join(', ') || 'Not listed'}</div>
          <p></p>

          ${imageElement}
        </div>
      `;
      yearSection.appendChild(publicationElement);
    });
    publicationsContainer.appendChild(yearSection);
  });
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Checks if the screen width is 768px or less
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      let timeout;

      dropdown.addEventListener('mouseenter', function() {
          clearTimeout(timeout); // Clear any existing timeout to hide
          dropdownContent.classList.add('show'); // Show the dropdown content
      });

      dropdown.addEventListener('mouseleave', function() {
          timeout = setTimeout(function() {
              dropdownContent.classList.remove('show'); // Hide the dropdown content after a delay
          }, 500); // Set the delay time (in milliseconds)
      });

      // Ensure dropdownContent hides correctly if user hovers back before timeout completes
      dropdownContent.addEventListener('mouseenter', function() {
          clearTimeout(timeout); // Clear timeout if re-hovered
      });

      dropdownContent.addEventListener('mouseleave', function() {
          timeout = setTimeout(function() {
              dropdownContent.classList.remove('show'); // Hide the dropdown content after a delay
          }, 500); // Set the delay time (in milliseconds)
      });
  });
});