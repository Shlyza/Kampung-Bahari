let activeFilter = 'semua';

function setFilter(cat, el) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filterProducts();
}

function filterProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.querySelector('.product-name').textContent.toLowerCase();
    const cat = card.dataset.category;
    const matchCat = activeFilter === 'semua' || cat === activeFilter;
    const matchQ = name.includes(q);
    card.style.display = matchCat && matchQ ? 'block' : 'none';
  });
}

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id], div[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#0077b6' : '';
    a.style.fontWeight = a.getAttribute('href') === '#' + current ? '700' : '';
  });
});
