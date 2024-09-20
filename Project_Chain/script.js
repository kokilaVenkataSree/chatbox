
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box_col');
  const sections = document.querySelectorAll('.our_row > div');

  if (boxes.length === 0 || sections.length === 0) {
    console.error('No sections or boxes found. Ensure the HTML structure is correct.');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        const box = document.querySelector(`.box_col[data-target="${targetId}"]`);
        if (box) {
          // Remove 'active' class from all boxes
          boxes.forEach(b => b.classList.remove('active'));
          // Add 'active' class to the matched box
          box.classList.add('active');
        }
      } else {
        const targetId = entry.target.id;
        const box = document.querySelector(`.box_col[data-target="${targetId}"]`);
        if (box) {
          // Optionally remove 'active' class when not intersecting
          box.classList.remove('active');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust as needed
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

