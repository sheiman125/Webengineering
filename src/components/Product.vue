<template>
    <section class="catalog">
      <div class="catalog__meta">{{ products.length }} products</div>
  
      <div class="grid">
        <article
          v-for="p in products"
          :key="p.id"
          class="card"
        >
          <div class="thumb">
            <img :src="p.image" :alt="p.title" />
            <span v-if="p.badge" class="badge">{{ p.badge }}</span>
          </div>
  
          <h3 class="title" :title="p.title">{{ p.title }}</h3>
  
          <div class="price-row">
            <span class="price-old" v-if="p.old">
              {{ p.old }}
            </span>
            <span class="price-now">{{ p.price }}</span>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script setup>
  /**
   * No APIs – everything is hardcoded to match your visual.
   * Replace the image URLs and text with your assets.
   */
  const products = [
    {
      id: 1,
      title: 'Violet Grace Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_2fdf8eeaa5d649f284f979bd64914f8e~mv2.jpeg/v1/fill/w_868,h_1080,al_c,q_85/002f13_2fdf8eeaa5d649f284f979bd64914f8e~mv2.jpeg',
      old: 'RM50.00',
      price: 'RM25.00',
    },
    {
      id: 2,
      title: 'Caramel Glow Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_e9b016f957cb4e379eb7b3c25e4202e9~mv2.jpeg/v1/fill/w_333,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_e9b016f957cb4e379eb7b3c25e4202e9~mv2.jpeg',
      old: 'RM75.00',
      price: 'RM37.50',
    },
    {
      id: 3,
      title: 'Turquoise Charm Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_c12d9af1961545958fa29dbba2c3188e~mv2.jpeg/v1/fill/w_132,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_c12d9af1961545958fa29dbba2c3188e~mv2.jpeg',
      old: 'RM94.54',
      price: 'RM75.63',
    },
    {
      id: 4,
      title: 'Midnight Blue Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_7621c08e1cc34d2c913c3986662d7d05~mv2.jpeg/v1/fill/w_133,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_7621c08e1cc34d2c913c3986662d7d05~mv2.jpeg',
      old: 'RM86.54',
      price: 'RM77.23',
    },
    {
      id: 5,
      title: 'Crimson Blossom Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_1ce5a34c14764ed09d67841b7b3cba1d~mv2.jpeg/v1/fill/w_130,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_1ce5a34c14764ed09d67841b7b3cba1d~mv2.jpeg',
      old: 'RM98.54',
      price: 'RM83.76',
    },
    {
      id: 6,
      title: 'Blush Charm Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_a08aca610cec4bd1b1b662cfb6055635~mv2.jpeg/v1/fill/w_132,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_a08aca610cec4bd1b1b662cfb6055635~mv2.jpeg',
      old: 'RM158.35',
      price: 'RM75.18',
    },
    {
      id: 7,
      title: 'Mustard Bloom Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_961dc7777e2246d4a83ab8c94a7a68e7~mv2.jpeg/v1/fill/w_131,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_961dc7777e2246d4a83ab8c94a7a68e7~mv2.jpeg',
      old: 'RM140.35',
      price: 'RM63.16',
    },
    {
      id: 8,
      title: 'Crimson Sandal Elegance Saree',
      image:
        'https://static.wixstatic.com/media/002f13_87dbcda0a5f74dccb9f8106cde42a1f0~mv2.jpeg/v1/fill/w_131,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_87dbcda0a5f74dccb9f8106cde42a1f0~mv2.jpeg',
      old: 'RM120.35',
      price: 'RM60.18',
    },
    {
      id: 9,
      title: 'Wildflower Blue Embroidered Kurti',
      image:
        'https://static.wixstatic.com/media/002f13_30f959c769704a1b98a4af2834e748d5~mv2.jpeg/v1/fill/w_143,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_30f959c769704a1b98a4af2834e748d5~mv2.jpeg',
      old: 'RM72.40',
      price: 'RM67.40',
      badge: 'CELEBRITY PICKS',
    },
    {
      id: 10,
      title: 'Green Embroidered Kurta',
      image:
        'https://static.wixstatic.com/media/002f13_553cd913c4ac43c7a0abeb1dc24737a0~mv2.jpeg/v1/fill/w_131,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_553cd913c4ac43c7a0abeb1dc24737a0~mv2.jpeg',
      old: 'RM82.70',
      price: 'RM42.70',
    },
    {
      id: 11,
      title: 'Blooming Melodies Mint Green Solid Embroidered Kurta',
      image:
        'https://static.wixstatic.com/media/002f13_2cf97d7735f14248b47db1e2e23dc380~mv2.jpeg/v1/fill/w_132,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_2cf97d7735f14248b47db1e2e23dc380~mv2.jpeg',
      old: 'RM91.71',
      price: 'RM64.20',
      badge: 'CELEBRITY PICKS',
    },
    {
      id: 12,
      title: 'Sareen Floral Printed Off White Kurta Set',
      image:
        'https://static.wixstatic.com/media/002f13_d2471234a9504eb1912e5bfea6bff711~mv2.jpeg/v1/fill/w_142,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_d2471234a9504eb1912e5bfea6bff711~mv2.jpeg',
      old: 'RM144.84',
      price: 'RM101.39',
    },
    {
      id: 13,
      title: 'Shades of Summer Mustard Kurta Set',
      image:
        'https://static.wixstatic.com/media/002f13_de4d73d794ac45c89d64904b9f65c104~mv2.jpg/v1/fill/w_172,h_172,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_de4d73d794ac45c89d64904b9f65c104~mv2.jpg',
      old: 'RM135.18',
      price: 'RM91.92',
    },
    {
      id: 14,
      title: 'Elegant Brown Silk Saree',
      image:
        'https://static.wixstatic.com/media/002f13_f8f31a142a58408faec74afb8f8a43d9~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_f8f31a142a58408faec74afb8f8a43d9~mv2.png',
      old: 'RM73.40',
      price: 'RM67.40',
    },
    {
      id: 15,
      title: 'Royal Maroon Silk Saree',
      image:
        'https://static.wixstatic.com/media/002f13_6cb95f7ceb634da980794d6dfaaaa9ef~mv2.png/v1/fill/w_115,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_6cb95f7ceb634da980794d6dfaaaa9ef~mv2.png',
      old: 'RM82.70',
      price: 'RM42.70',
    },
    {
      id: 16,
      title: 'Classic Black Cotton Saree',
      image:
        'https://static.wixstatic.com/media/002f13_54d8700a70424b03b2150b2ee7dce0ed~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_54d8700a70424b03b2150b2ee7dce0ed~mv2.jpg',
      old: 'RM90.70',
      price: 'RM40.40',
    },
    {
      id: 17,
      title: 'Smoky Grey with Black Embellished Saree',
      image:
        'https://static.wixstatic.com/media/002f13_05619007b08d499e8ccb0e5a104df3bc~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_05619007b08d499e8ccb0e5a104df3bc~mv2.jpg',
      old: 'RM124.70',
      price: 'RM76.80',
    },
    {
      id: 18,
      title: 'Rose Pink Georgette Saree',
      image:
        'https://static.wixstatic.com/media/002f13_e2496b7b707b4574af2b3ece7996f6f5~mv2.png/v1/fill/w_126,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/002f13_e2496b7b707b4574af2b3ece7996f6f5~mv2.png',
      old: 'RM182.70',
      price: 'RM91.30',
    },
  ];
  </script>
  
  <style scoped>
  /* --- overall page spacing to match your capture --- */
  .catalog {
    padding: 12px 18px 36px;
    background: #fff;
    color: #111;
    font-family: "Inter", "Helvetica Neue", Arial, system-ui, -apple-system,
      "Segoe UI", Roboto, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }
  
  .catalog__meta {
    font-size: 12px;
    color: #777;
    margin: 0 0 14px 8px; /* “13 products” tucked left */
  }
  
  /* --- grid like the screenshot: many small cards per row --- */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 34px 36px; /* vertical / horizontal gaps */
    align-items: start;
  }
  
  /* --- card --- */
  .card {
    background: transparent;
    line-height: 1.25;
  }
  
  /* image area */
  .thumb {
    position: relative;
    width: 100%;
    height: 220px; /* tuned to your capture */
    overflow: hidden;
    background: #f2f2f2;
  }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* tiny maroon badge in the image corner */
  .badge {
    position: absolute;
    top: 6px;
    left: 6px;
    font-size: 9px;
    letter-spacing: 0.02em;
    font-weight: 600;
    color: #fff;
    background: #6a2a2a; /* deep maroon like in your screenshot */
    padding: 3px 6px;
    border-radius: 2px;
    text-transform: uppercase;
  }
  
  /* product title: two lines, ellipsized, small & neat */
  .title {
    margin: 8px 0 6px;
    font-size: 12px;
    font-weight: 400;
    color: #111;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* price row aligns exactly like the capture */
  .price-row {
    font-size: 12px;
    display: flex;
    gap: 6px;
    align-items: baseline;
    white-space: nowrap;
  }
  
  .price-old {
    color: #8a8a8a;
    text-decoration: line-through;
  }
  .price-now {
    color: #000;
  }
  </style>
  