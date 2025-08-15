<template>
    <section class="about-section">
      <div class="about-container">
  
        <!-- Row 1: Image Left, Text Right -->
        <div class="about-row reveal">
          <div class="about-img">
            <img
              src="../assets/About_1.jpg"
              alt="About Us"
              class="about-photo zoom-on-scroll"
            />
          </div>
          <div class="about-text reveal">
            <h2>About Us</h2>
            <p>
              Maharanis is inspired by Samantha's love for fashion and her journey in life.
              When talking about the inspiration to start this brand, Samantha says,
              “I always loved fashion, like any other girl. Growing up I could never afford
              fancy designer clothes. I have always wanted fashion accessible to everyone
              so they can celebrate their individual expression through fashion.
            </p>
          </div>
        </div>
  
        <!-- Row 2: Text Left, Image Right -->
        <div class="about-row reveal">
          <div class="about-text reveal">
            <p>
              Be it a college girl or a working woman, there’s something for everyone at Maharanis.
              For me, Maharanis is a reflection of who I am. Maharanis is an online fashion brand
              co-created with Samantha Ruth Prabhu. Having been fascinated by fashion throughout
              her acting journey, she set out to explore fashion through Maharanis.
            </p>
          </div>
          <div class="about-img">
            <img
              src="../assets/About us_2.jpg"
              alt="New In"
              class="about-photo zoom-on-scroll"
            />
          </div>
        </div>
  
        <!-- Our Inspiration -->
        <div class="about-inspiration reveal">
          <h2>Our Inspiration</h2>
          <p>
            Maharanis is inspired by Samantha's love for fashion and her journey in life.
            When talking about the inspiration to start this brand, Samantha says, “I always loved fashion, like any other girl. Growing up I could never afford fancy designer clothes. I have always wanted fashion accessible to everyone so they can celebrate their individual expression through fashion.
            Be it a college girl or a working woman, there’s something for everyone at Maharanis. For me, Maharanis is a reflection of who I am, as I am.”
            Maharanis is an online fashion brand co-created with Samantha Ruth Prabhu. Having been fascinated by fashion throughout her acting journey, she set out to explore fashion through Maharanis.
            Maharanis offers a wide range of contemporary ethnic and fusion wear women’s clothing. Shop online at Maharanis for a wide array of tops, tunics, kurtis, kurtas, suits sets, jackets, shrugs, dresses, trousers, leggings, skirts, palazzos and sarees.
            All Products Retailed By Maharanis Lifestyle Private Limited
          </p>
        </div>
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    mounted() {
      // IntersectionObserver adds animation class on enter and removes on leave
      this._io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in-view')
            } else {
              e.target.classList.remove('in-view')
            }
          })
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: [0, 0.15, 0.6]
        }
      )
  
      // Observe reveal blocks and images that should subtly zoom
      this.$el.querySelectorAll('.reveal, .zoom-on-scroll').forEach((el) => {
        this._io.observe(el)
      })
    },
    beforeUnmount() {
      if (this._io) this._io.disconnect()
    }
  }
  </script>
  
  <style scoped>
  /* --- Original design (unchanged) --- */
  .about-section {
    background-color: #fff;
    padding: 3rem 1rem;
  }
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .about-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .about-row.reverse {
    flex-direction: row-reverse;
  }
  .about-img {
    flex: 1;
  }
  .about-img img {
    width: 100%;
    border-radius: 5px;
    display: block;
  }
  .about-text {
    flex: 1;
  }
  .about-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: black;
  }
  .about-text p {
    font-size: 1rem;
    line-height: 1.6;
    color: black;
  }
  .about-inspiration {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  .about-inspiration h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: black;
  }
  .about-inspiration p {
    font-size: 1rem;
    line-height: 1.6;
    color: black;
  }
  
  /* --- Subtle scroll animations (no visual change when static) --- */
  /* generic reveal (text blocks, rows) */
  .reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .8s ease, transform .8s ease;
    will-change: opacity, transform;
  }
  .reveal.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* image zoom: start slightly scaled, settle when in view */
  .about-photo.zoom-on-scroll {
    transform: scale(1.06);
    transition: transform 1.1s ease-out;
    will-change: transform;
  }
  .about-photo.zoom-on-scroll.in-view {
    transform: scale(1);
  }
  
  /* responsive (unchanged layout) */
  @media (max-width: 768px) {
    .about-row { gap: 1.25rem; }
  }
  </style>
  