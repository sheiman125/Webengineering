<template>
    <div>
      <!-- Hero Section -->
      <div class="hero-section" ref="hero">
        <div
          class="hero-text reveal"
          :style="{ transform: `translateY(${heroShift}px)` }"
        >
          <h1>Maharanis- Style That Speaks Without Words</h1>
          <p>Our creations let your elegance and presence shine effortlessly.</p>
          <Button label="View Now" class="p-button-outlined p-button-primary" @click="goToProduct"  />
        </div>
      </div>
  
      <!-- Sale Banner -->
      <div class="sale-banner reveal">
        <h4>- Final Sale -</h4>
        <h2>Get 30% - 50% Off</h2>
        <Button label="View Now" class="p-button-outlined2 p-button-primary2" @click="goToProduct"  />
      </div>
  
      <!-- Collection Section -->
      <section class="collection-section reveal">
        <h2 class="section-title">OUR COLLECTION</h2>
  
        <Carousel
          :value="collection"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          autoplayInterval="3000"
        >
          <template #item="slotProps">
            <Card class="collection-card">
              <template #content>
                <img
                  :src="slotProps.data.image"
                  alt="Collection Item"
                  class="collection-image hover-zoom reveal"
                />
              </template>
            </Card>
          </template>
        </Carousel>
  
        <div class="p-text-center p-mt-3">
          <Button label="View All" class="p-button-secondary" />
        </div>
      </section>
  
      <!-- Quality Section -->
      <section class="quality-section">
        <h2 class="section-title reveal">QUALITY</h2>
        <p class="quality-intro reveal">
          Maharanis is known for blending modern trends with timeless tradition, creating clothing
          that embodies elegance, comfort, and individuality.
        </p>
  
        <!-- Row 1 -->
        <div class="quality-row reveal">
          <div
            class="quality-img zoom-on-scroll"
            :style="{ backgroundImage: `url(${imgQuality1})` }"
          ></div>
          <div style="background-color:antiquewhite;" class="quality-text">
            <h4>Affordability</h4>
            <h5>Accessible Fashion</h5>
            <p>
              Maharanis vision is to make high-quality fashion accessible for all women.
              With fair pricing, we ensure that you can indulge in stylish and elegant pieces without breaking the bank.
            </p>
          </div>
        </div>
  
        <!-- Row 2 -->
        <div class="quality-row reverse reveal">
          <div
            class="quality-img zoom-on-scroll"
            :style="{ backgroundImage: `url(${imgQuality2})` }"
          ></div>
          <div class="quality-text">
            <h4>Style</h4>
            <h5>Fashion Forward</h5>
            <p>
              Our styles are unique, blending contemporary aesthetics with classic ethnic designs.
              Choose from a wide range of tops, kurtis, dresses, and more to express your individuality and grace.
            </p>
          </div>
        </div>
  
        <!-- Row 3 -->
        <div class="quality-row reveal">
          <div
            class="quality-img zoom-on-scroll"
            :style="{ backgroundImage: `url(${imgQuality3})` }"
          ></div>
          <div class="quality-text dark">
            <h4>Craftsmanship</h4>
            <h5>Authentic Craft</h5>
            <p>
              Our clothing is rooted in Indian craftsmanship, ensuring each item reflects cultural heritage and is made to last.
              Choose Maharanis for clothing that tells a story.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function goToProduct() {
    router.push('/product')
  }
  </script>
  <script>
  import img1 from '../assets/Home_Gallery1.PNG'
  import img2 from '../assets/Home_Gallery2.PNG'
  import img3 from '../assets/Home_Gallery3.PNG'
  import img4 from '../assets/test.jpg'
  
  import imgQuality1 from '../assets/Home_3.jpg'
  import imgQuality2 from '../assets/Home_4.PNG'
  import imgQuality3 from '../assets/Home_2.jpeg'
  
  import Carousel from 'primevue/carousel'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  
  export default {
    components: { Carousel, Card, Button },
    data() {
      return {
        imgQuality1,
        imgQuality2,
        imgQuality3,
        heroShift: 0,
        collection: [
          { image: img1 },
          { image: img2 },
          { image: img3 },
          { image: img4 }
        ],
        responsiveOptions: [
          { breakpoint: '200px', numVisible: 3, numScroll: 1 },
          { breakpoint: '768px', numVisible: 2, numScroll: 1 },
          { breakpoint: '560px', numVisible: 1, numScroll: 1 }
        ]
      }
    },
    mounted() {
      // Parallax hero text
      this.onScroll()
      window.addEventListener('scroll', this.onScroll, { passive: true })
  
      // Reveal + zoom observers (add on enter, remove on leave so it replays)
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
          // Start a bit before it actually shows to feel snappier
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: [0, 0.15, 0.6]
        }
      )
  
      // Observe everything that should animate
      this.$el.querySelectorAll('.reveal, .zoom-on-scroll').forEach((el) => {
        this._io.observe(el)
      })
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll)
      if (this._io) this._io.disconnect()
    },
    methods: {
      onScroll() {
        const y = window.scrollY || 0
        this.heroShift = Math.min(40, y * 0.15)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Smooth scroll feel */
  html { scroll-behavior: smooth; }
  
  /* -------- Hero Section (unchanged look) -------- */
  .hero-section {
    background: url('../assets/Home_1.png') no-repeat center center fixed;
    background-size: cover;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    position: relative;
  }
  .hero-text { padding: 20px; transition: transform .35s ease-out; }
  
  /* -------- Sale Banner -------- */
  .sale-banner {
    background-color: #2f3e3f;
    color: white;
    text-align: center;
    padding: 40px 0;
  }
  
  /* -------- Collection Section -------- */
  .collection-section {
    background-color: #f4efe9;
    padding: 3rem 1rem;
    text-align: center;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: black;
  }
  .collection-card {
    border: none;
    background: none;
    box-shadow: none;
  }
  .collection-image {
    width: 100%;
    height: 700px;
    object-fit: cover;
    border-radius: 5px;
    will-change: transform;
    transition: transform .6s ease, box-shadow .6s ease;
  }
  .hover-zoom:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 35px rgba(0,0,0,.15);
  }
  @media (max-width: 768px) {
    .collection-image { height: 500px; }
  }
  @media (max-width: 480px) {
    .collection-image { height: 420px; }
  }
  
  /* -------- Quality Section -------- */
  .quality-section {
    padding: 2rem;
    background-color: #fff;
    color: #000;
  }
  .quality-intro {
    max-width: 800px;
    margin: 0 0 2rem;
  }
  .quality-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 350px;
  }
  .quality-row.reverse { direction: rtl; }
  .quality-row.reverse .quality-text { direction: ltr; }
  
  /* image panel */
  .quality-img {
    background-size: cover;
    background-position: center;
    min-height: 350px;
    width: 100%;
    will-change: transform;
  }
  
  /* Scroll zoom effect: zooms IN when entering; resets when leaving */
  .zoom-on-scroll {
    transform: scale(1.06);
    transition: transform 1.2s ease-out;
  }
  .zoom-on-scroll.in-view {
    transform: scale(1);
  }
  
  .quality-text {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
  }
  .quality-text.dark {
    background: #2f3e3f;
    color: white;
  }
  
  @media (max-width: 768px) {
    .quality-row,
    .quality-row.reverse {
      grid-template-columns: 1fr;
      direction: ltr;
    }
    .quality-img { min-height: 250px; }
  }
  
  /* -------- Generic reveal-on-scroll -------- */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .9s ease, transform .9s ease;
    will-change: opacity, transform;
  }
  .reveal.in-view {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* -------- Buttons (kept same) -------- */
  .p-button-outlined.p-button-primary {
    color: white !important;
    border-color: #f4efe9;
  }
  .p-button-outlined.p-button-primary:hover {
    color: #000 !important;
    border-color: #000000;
    background-color: #ffffff;
  }
  .p-button-outlined2.p-button-primary2 {
    color: #000 !important;
    border-color: #000000;
    background-color: #ffffff;
  }
  .p-button-outlined2.p-button-primary2:hover {
    color: #fff !important;
    border-color: #000000;
    background-color: #000000;
  }
  </style>
  