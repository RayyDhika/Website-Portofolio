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

// Sinkronkan ujung tali ke titik tengah pointer polaroid & pointer tiap card
function syncEduThreads() {
  const board = document.querySelector('.edu-board');
  const svg = document.querySelector('.edu-threads');
  const centerPin = document.querySelector('.clue-polaroid .pin');
  if (!board || !svg || !centerPin || window.innerWidth < 760) return;

  const bRect = board.getBoundingClientRect();
  if (!bRect.width || !bRect.height) return;

  const toSvg = (el) => {
    const r = el.getBoundingClientRect();
    return {
      x: ((r.left + r.width / 2 - bRect.left) / bRect.width) * 900,
      y: ((r.top + r.height / 2 - bRect.top) / bRect.height) * 500
    };
  };

  const c = toSvg(centerPin);
  const pairs = [
    ['#thread-sd', '.note-sd .pin', -14],
    ['#thread-smp', '.note-smp .pin', -14],
    ['#thread-scrap', '.clue-scrap .pin', 16],
    ['#thread-smk', '.note-smk .pin', 16]
  ];

  pairs.forEach(([pathSel, pinSel, curveOffset]) => {
    const path = svg.querySelector(pathSel);
    const pin = board.querySelector(pinSel);
    if (!path || !pin) return;
    const t = toSvg(pin);
    const mx = (c.x + t.x) / 2;
    const my = (c.y + t.y) / 2 + curveOffset;
    path.setAttribute('d', `M ${c.x.toFixed(1)} ${c.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${t.x.toFixed(1)} ${t.y.toFixed(1)}`);
  });
}

window.addEventListener('load', syncEduThreads);
window.addEventListener('resize', syncEduThreads);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(syncEduThreads);
}
