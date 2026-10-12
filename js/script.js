const header = document.querySelector('.header');

// Homepage: pakai .djournal, halaman Locations: pakai judul .tittle
const target = document.querySelector('.djournal') || document.querySelector('#location .tittle');

function updateHeader() {
  if (!header || !target) return;

  const targetTop = target.getBoundingClientRect().top;
  const headerHeight = header.offsetHeight;

  // Blur aktif saat bagian atas target menyentuh batas bawah header
  header.classList.toggle('scrolled', targetTop <= headerHeight);
}

window.addEventListener('scroll', updateHeader);
window.addEventListener('load', updateHeader); // cek kondisi awal
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

function closeMenu() {
  navbar.classList.remove('active');
  menuIcon.classList.remove('open');
}

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('open');
});

navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
const viewMore = document.getElementById('viewMore');

if (viewMore) {
  const extras = document.querySelectorAll('.div-box.extra');
  const label = viewMore.querySelector('.vm-label');

  viewMore.addEventListener('click', () => {
    const open = viewMore.classList.toggle('open');
    extras.forEach(el => el.classList.toggle('show', open));
    viewMore.setAttribute('aria-expanded', open);
    label.textContent = open ? 'View less' : 'View more';
  });
}