/* ============================================================
   CYBERSHIELD — Main Entry Point
   ============================================================ */

(function () {
  'use strict';

  /* ── Active nav link by scroll (single-page only) ── */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ── Re-init reveal after dynamic content ── */
  window.reinitReveal = function () {
    const els = document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  };

  /* ── Portfolio filter ── */
  function initPortfolioFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!btns.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const show = filter === 'all' || card.getAttribute('data-category') === filter;
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          if (show) {
            card.style.display = '';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ── Smooth anchor scroll ── */
  function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Back to top ── */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.style.opacity = window.scrollY > 400 ? '1' : '0';
      btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollSpy();
    initPortfolioFilter();
    initAnchorScroll();
    initBackToTop();
  });
})();
