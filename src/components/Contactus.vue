<template>
    <footer class="shop-footer">
      <!-- Dark thank-you band -->
      <section class="thankyou animate-on-scroll">
        <div class="thankyou__inner">
          <h2 class="thankyou__heading">
            Thank You For
            <br />
            Shopping With Us
          </h2>
  
          <div class="thankyou__copy">
            <p>
              We truly appreciate your support and hope you enjoyed your
              experience. If you have any questions, suggestions, or need
              assistance with your order, please don’t hesitate to get in touch
              with us. Our team is always happy to help and will respond as
              quickly as possible. Stay connected with us and let us know how we
              can make your shopping experience even better!
            </p>
  
            <button class="btn-ghost hover-scale">Contact Us</button>
          </div>
        </div>
      </section>
    </footer>
  </template>
  
  <script>
  export default {
    mounted() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        { threshold: 0.15 }
      );
  
      document
        .querySelectorAll(".animate-on-scroll")
        .forEach((el) => observer.observe(el));
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap");
  
  :host,
  .shop-footer {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      sans-serif;
    color: #1b1b1b;
  }
  
  :root,
  .shop-footer {
    --dark: #2e3432;
    --text-on-dark: #f3f6f4;
    --beige: #f4efe8;
    --ink: #1c1f1e;
    --line: #d7d1c8;
    --btn-dark: #2f3a36;
  }
  
  /* ===== Scroll animation ===== */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .animate-on-scroll.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* ===== THANK YOU section ===== */
  .thankyou {
    background: var(--dark);
    color: var(--text-on-dark);
    padding: 72px 24px 84px;
  }
  
  .thankyou__inner {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 56px;
    align-items: center;
  }
  
  .thankyou__heading {
    font-family: "Playfair Display", serif;
    font-weight: 600;
    letter-spacing: 0.02em;
    font-size: 44px;
    line-height: 1.22;
    text-align: center;
  }
  
  .thankyou__copy {
    max-width: 560px;
    margin-left: auto;
  }
  
  .thankyou__copy p {
    font-size: 14px;
    line-height: 1.8;
    opacity: 0.95;
    margin: 0 0 18px;
  }
  
  /* ===== Ghost button with animation ===== */
  .btn-ghost {
    display: inline-block;
    font-size: 13px;
    padding: 10px 18px;
    background: transparent;
    color: var(--text-on-dark);
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
  }
  
  .btn-ghost:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.05);
  }
  
  /* ===== Reusable hover scaling effect ===== */
  .hover-scale {
    transition: transform 0.25s ease;
  }
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 980px) {
    .thankyou__inner {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .thankyou__copy {
      margin: 0 auto;
    }
  }
  
  @media (max-width: 560px) {
    .thankyou {
      padding: 56px 16px 64px;
    }
    .thankyou__heading {
      font-size: 34px;
    }
  }
  </style>
  