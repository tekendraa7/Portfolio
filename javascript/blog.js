/* ============================================================
   CYBERSHIELD — Blog Data & Rendering
   ============================================================ */

(function () {
  'use strict';

  const POSTS = [
    {
      id: 1,
      title: 'Linux for Beginners: Getting Started with the Terminal',
      excerpt: 'A practical introduction to the Linux command line — navigating the filesystem, managing files, and essential commands every beginner should know.',
      category: 'Linux',
      date: 'January 2025',
      readTime: '7 min read',
      emoji: '🐧',
      tags: ['Linux', 'Terminal', 'Beginner'],
    },
    {
      id: 2,
      title: 'Networking Fundamentals: TCP/IP & the OSI Model Explained',
      excerpt: 'Breaking down the OSI model layer by layer — from physical cables to application protocols, with real-world examples and packet flow diagrams.',
      category: 'Networking',
      date: 'February 2025',
      readTime: '9 min read',
      emoji: '🌐',
      tags: ['Networking', 'TCP/IP', 'OSI Model'],
    },
    {
      id: 3,
      title: 'My Cybersecurity Learning Journey',
      excerpt: 'How I went from a curious computer engineering student to building a cyber security club — the resources, courses, and mindset shifts that shaped my path.',
      category: 'Career',
      date: 'March 2025',
      readTime: '6 min read',
      emoji: '🔐',
      tags: ['Cybersecurity', 'Learning', 'Journey'],
    },
    {
      id: 4,
      title: 'Building a Cyber Club Website: Lessons Learned',
      excerpt: 'Behind the scenes of creating the CSC-FWU website — design decisions, tech stack choices, challenges we faced, and what I would do differently.',
      category: 'Web Dev',
      date: 'April 2025',
      readTime: '8 min read',
      emoji: '🛠',
      tags: ['Web Dev', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 5,
      title: 'Introduction to Nmap: Network Scanning Basics',
      excerpt: 'A beginner-friendly guide to Nmap — understanding port scanning, service detection, OS fingerprinting, and how defenders can use these same tools.',
      category: 'Tools',
      date: 'May 2025',
      readTime: '10 min read',
      emoji: '🔍',
      tags: ['Nmap', 'Scanning', 'Tools'],
    },
    {
      id: 6,
      title: 'Understanding Wireshark: Capturing & Analyzing Packets',
      excerpt: 'Step-by-step guide to using Wireshark for network analysis — capturing live traffic, applying filters, reading packet details, and spotting anomalies.',
      category: 'Tools',
      date: 'June 2025',
      readTime: '11 min read',
      emoji: '📡',
      tags: ['Wireshark', 'Packets', 'Analysis'],
    },
  ];

  function renderPosts(posts) {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    grid.innerHTML = posts.map((p, i) => `
      <article class="blog-card reveal delay-${(i % 3) + 1}">
        <div class="blog-img">
          <span>${p.emoji}</span>
          <span class="blog-category">${p.category}</span>
        </div>
        <div class="blog-body">
          <div class="blog-meta">${p.date} &bull; ${p.readTime}</div>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <a href="#" class="blog-read-more" onclick="return false;">Read More →</a>
        </div>
      </article>
    `).join('');

    /* Re-run reveal observer for dynamically added cards */
    if (window.reinitReveal) window.reinitReveal();
  }

  function initFilters(posts) {
    const btns = document.querySelectorAll('[data-filter]');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        const filtered = filter === 'all'
          ? posts
          : posts.filter(p => p.category.toLowerCase() === filter.toLowerCase());
        renderPosts(filtered);
      });
    });
  }

  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name  = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const msg   = form.querySelector('#newsletterMsg');
      if (!name || !email) {
        if (msg) { msg.textContent = 'Please fill in all fields.'; msg.style.color = '#ff6b6b'; msg.classList.add('show'); }
        return;
      }
      if (msg) {
        msg.textContent = '🎉 Thanks for subscribing, ' + name + '!';
        msg.style.color = 'var(--accent)';
        msg.classList.add('show');
        form.reset();
        setTimeout(() => msg.classList.remove('show'), 4000);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderPosts(POSTS);
    initFilters(POSTS);
    initNewsletter();
  });
})();
