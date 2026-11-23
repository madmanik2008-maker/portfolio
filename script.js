// Project Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Map Preview Modal
function openModal(imgSrc, title) {
  const modal = document.getElementById('mapModal');
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('modalTitle').textContent = title;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('mapModal').style.display = 'none';
}
