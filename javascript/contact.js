/* ============================================================
   CYBERSHIELD — Contact Form Validation
   ============================================================ */

(function () {
  'use strict';

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(fieldId, msg) {
    const el = document.getElementById(fieldId + 'Error');
    if (el) { el.textContent = msg; el.classList.add('show'); }
  }

  function clearError(fieldId) {
    const el = document.getElementById(fieldId + 'Error');
    if (el) el.classList.remove('show');
  }

  function clearAllErrors() {
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
  }

  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    /* Live validation */
    ['name', 'email', 'message'].forEach(field => {
      const input = form.querySelector(`[name="${field}"]`);
      if (input) {
        input.addEventListener('input', () => clearError(field));
        input.addEventListener('blur', () => {
          const val = input.value.trim();
          if (field === 'name'    && !val)               showError(field, 'Name is required.');
          if (field === 'email'   && !validateEmail(val)) showError(field, 'Enter a valid email address.');
          if (field === 'message' && val.length < 10)     showError(field, 'Message must be at least 10 characters.');
        });
      }
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      clearAllErrors();

      const name    = form.querySelector('[name="name"]').value.trim();
      const email   = form.querySelector('[name="email"]').value.trim();
      const subject = form.querySelector('[name="subject"]')?.value.trim() || '';
      const message = form.querySelector('[name="message"]').value.trim();
      const success = document.getElementById('formSuccess');
      const submit  = form.querySelector('[type="submit"]');

      let valid = true;

      if (!name)                { showError('name',    'Name is required.');                    valid = false; }
      if (!validateEmail(email)){ showError('email',   'Enter a valid email address.');          valid = false; }
      if (message.length < 10)  { showError('message', 'Message must be at least 10 characters.'); valid = false; }

      if (!valid) return;

      /* Simulate sending */
      submit.textContent = 'Sending…';
      submit.disabled = true;

      setTimeout(() => {
        submit.textContent = 'Send Message';
        submit.disabled = false;
        form.reset();
        if (success) {
          success.classList.add('show');
          setTimeout(() => success.classList.remove('show'), 5000);
        }
      }, 1200);
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();
