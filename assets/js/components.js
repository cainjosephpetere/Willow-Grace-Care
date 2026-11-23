(function () {
  let header = document.querySelector('[data-site-header]');
  let footer = document.querySelector('[data-site-footer]');

  if (!header) {
    const existingTopbar = document.querySelector('.topbar');
    const existingHeader = document.querySelector('.site-header');
    if (existingTopbar && existingHeader) {
      header = document.createElement('header');
      header.setAttribute('data-site-header', '');
      existingTopbar.before(header);
      existingTopbar.remove();
      existingHeader.remove();
    }
  }

  if (!footer) {
    const existingFooter = document.querySelector('.footer');
    if (existingFooter) {
      footer = document.createElement('footer');
      footer.setAttribute('data-site-footer', '');
      existingFooter.before(footer);
      existingFooter.remove();
    }
  }

  if (!header) return;

  header.innerHTML = `
    <div class="topbar">
      <div class="container">
        <span>Compassionate care, close to home</span>
        <span>Call our friendly team: <a href="tel:+442079460123">020 7946 0123</a></span>
      </div>
    </div>
    <div class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Willow and Grace Care - home">
          <span class="brand-mark" aria-hidden="true">✿</span>
          <span>Willow &amp; Grace<small>Care and Support</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">☰</button>
        <nav class="nav-links" id="primary-navigation" aria-label="Primary navigation">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Our Care</a>
          <a href="care-at-home.html">Care at Home</a>
          <a href="careers.html">Careers</a>
          <a href="insights.html">Insights</a>
          <a href="contact.html">Contact</a>
        </nav>
        <a class="nav-cta" href="contact.html">Arrange a conversation ↗</a>
      </div>
    </div>
  `;

  if (footer) {
    footer.innerHTML = `
      <div class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="brand" href="index.html">
                <span class="brand-mark" aria-hidden="true">✿</span>
                <span>Willow &amp; Grace<small>Care and Support</small></span>
              </a>
              <p class="footer-intro">Thoughtful, person-centred support that helps people feel comfortable, confident and connected at home.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <div class="footer-links">
                <a href="about.html">About us</a>
                <a href="services.html">Our services</a>
                <a href="careers.html">Careers</a>
                <a href="insights.html">News &amp; insights</a>
              </div>
            </div>
            <div>
              <h4>Care services</h4>
              <div class="footer-links">
                <a href="care-at-home.html">Care at home</a>
                <a href="dementia-support.html">Dementia support</a>
                <a href="services.html">Personal care</a>
                <a href="services.html">Companionship</a>
              </div>
            </div>
            <div>
              <h4>Get in touch</h4>
              <div class="footer-links">
                <a href="tel:+442079460123">020 7946 0123</a>
                <a href="mailto:hello@example.com">hello@example.com</a>
                <a href="contact.html">Make an enquiry</a>
                <span>Serving [Your Town / Area]</span>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Willow &amp; Grace Care. Demonstration website.</span>
            <span><a href="privacy.html">Privacy notice</a> &nbsp;·&nbsp; <a href="contact.html">Contact</a></span>
          </div>
        </div>
      </div>
    `;
  }
})();
