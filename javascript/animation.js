/* ============================================================
   CYBERSHIELD — Scroll Animations & Visual FX
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Reveal ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ── Skill Bars ── */
  function initSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    if (!fills.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const pct = e.target.getAttribute('data-pct') || '0';
          e.target.style.width = pct + '%';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    fills.forEach(el => observer.observe(el));
  }

  /* ── Animated Counter ── */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target + (el.getAttribute('data-suffix') || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
      }
    }, 16);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ── Typing Effect ── */
  function initTyping() {
    const el = document.getElementById('typingText');
    if (!el) return;

    const phrases = [
      'Computer Engineering Student',
      'Cybersecurity Enthusiast',
      'Linux User',
      'Lifelong Learner',
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        el.textContent = phrase.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        el.textContent = phrase.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 55 : 90);
    }
    setTimeout(tick, 600);
  }

  /* ── Floating particles ── */
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        animation-duration: ${Math.random() * 15 + 12}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.5 + 0.1};
      `;
      container.appendChild(p);
    }
  }

  /* ── Roadmap active dots ── */
  function initRoadmapDots() {
    document.querySelectorAll('.roadmap-dot[data-status="active"]').forEach(dot => {
      dot.classList.add('active');
    });
  }

  /* ── Card hover tilt ── */
  function initTilt() {
    document.querySelectorAll('.project-card, .cert-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rx = ((y - cy) / cy) * 4;
        const ry = ((cx - x) / cx) * 4;
        card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initSkillBars();
    initCounters();
    initTyping();
    initParticles();
    initRoadmapDots();
    setTimeout(initTilt, 500);

    /* Page entrance */
    document.body.classList.add('page-enter');
  });
})();
