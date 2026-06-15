/* ============================================================
   CYBERSHIELD — Navigation
   ============================================================ */

(function () {
  'use strict';

  const NAV_LINKS = [
    { href: 'index.html',        label: 'Home' },
    { href: 'about.html',        label: 'About' },
    { href: 'portfolio.html',    label: 'Portfolio' },
    { href: 'skills.html',       label: 'Skills' },
    { href: 'certificates.html', label: 'Certificates' },
    { href: 'blog.html',         label: 'Blog' },
    { href: 'roadmap.html',      label: 'Roadmap' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    return file === '' ? 'index.html' : file;
  }

  function buildNavbar() {
    const current = getCurrentPage();
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.innerHTML = `
      <div class="container">
        <nav class="nav-inner">
          <a href="index.html" class="nav-logo">
            <div class="nav-logo-icon">🛡</div>
            <span>CyberShield</span>
          </a>
          <ul class="nav-links">
            ${NAV_LINKS.map(l => `
              <li><a href="${l.href}" class="${current === l.href ? 'active' : ''}">${l.label}</a></li>
            `).join('')}
          </ul>
          <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
        <div class="nav-mobile" id="navMobile">
          ${NAV_LINKS.map(l => `
            <a href="${l.href}" class="${current === l.href ? 'active' : ''}">${l.label}</a>
          `).join('')}
        </div>
      </div>
    `;

    /* Hamburger toggle */
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    hamburger.addEventListener('click', () => {
      const open = navMobile.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    /* Close on link click */
    navMobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navMobile.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });

    /* Scroll effect */
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  function buildFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="text-decoration:none;">
              <div class="nav-logo-icon">🛡</div>
              <span>CyberShield</span>
            </a>
            <p>Cybersecurity portfolio of Tekendra Bhandari — aspiring security professional from Nepal.</p>
            <div class="footer-socials" style="margin-top:18px;">
              <a href="https://github.com/tekendrabhandari" target="_blank" rel="noopener" class="social-icon" title="GitHub">⌥</a>
              <a href="https://linkedin.com/in/tekendrabhandari" target="_blank" rel="noopener" class="social-icon" title="LinkedIn">in</a>
              <a href="mailto:tekendra@example.com" class="social-icon" title="Email">✉</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="skills.html">Skills</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>More</h4>
            <ul>
              <li><a href="certificates.html">Certificates</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="roadmap.html">Roadmap</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="cv.html">Download CV</a></li>
              <li><a href="https://github.com/sharppankaj/CSC-FWU" target="_blank" rel="noopener">CSC-FWU</a></li>
              <li><a href="contact.html">Hire Me</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Tekendra Bhandari. Built with 💙</span>
          <span>Dhangadhi, Kailali, Nepal</span>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    buildFooter();
  });
})();
