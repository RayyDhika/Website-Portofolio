// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Tandai menu/tab yang sedang dilihat
const links = [...document.querySelectorAll('.bar nav ul a, .tabs a')];
const ids = [...new Set(links.map(a => a.getAttribute('href')))];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
ids.forEach(h => { const s = document.querySelector(h); if (s) spy.observe(s); });

// Bar navigasi atas baru muncul setelah hero (buku) terlewati
const bar = document.querySelector('.bar');
new IntersectionObserver(([e]) => bar.classList.toggle('show', !e.isIntersecting)).observe(document.getElementById('top'));
