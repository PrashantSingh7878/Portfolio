document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded!");
  
    // Smooth scroll for navbar links
    document.querySelectorAll('.nav-right a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Intersection Observer for animation on scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
  
    // Skills Chart
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'React', 'R', 'Tableau', 'SQL'],
        datasets: [{
          label: 'Proficiency (%)',
          data: [85, 90, 80, 95, 90, 88, 85, 70, 75, 80],
          backgroundColor: '#38bdf8',
          borderRadius: 10
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: '#f8fafc'
            },
            grid: {
              color: '#334155'
            }
          },
          x: {
            ticks: {
              color: '#f8fafc'
            },
            grid: {
              color: '#334155'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#f8fafc'
            }
          }
        }
      }
    });
  });
  