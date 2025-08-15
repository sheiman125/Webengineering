<template>
  <div>
    <!-- Navbar -->
    <div class="custom-navbar-wrapper">
      <div class="navbar-brand">Maharanis</div>
      <Menubar :model="menuItems" class="p-px-5 custom-navbar">
        <!-- Menu Items -->
        <template #item="{ item, props }">
          <RouterLink
            v-if="item.to"
            v-slot="{ href, navigate, isActive }"
            :to="item.to"
            custom
          >
            <a
              v-bind="props.action"
              :href="href"
              @click="navigate"
              :class="['p-menuitem-link', { 'active-link': isActive }]"
            >
              <span class="p-menuitem-text">{{ item.label }}</span>
            </a>
          </RouterLink>
          <a v-else v-bind="props.action" :href="item.url" class="p-menuitem-link">
            <span class="p-menuitem-text">{{ item.label }}</span>
          </a>
        </template>
      </Menubar>
    </div>

    <!-- Routed Page Content -->
    <router-view />

    <!-- Footer -->
    <footer class="connect">
      <div class="connect__inner">
        <!-- Left: Brand + Subscribe -->
        <div class="connect__left">
          <div class="brand">Maharanis</div>
          <h3 class="connect__title">Connect With Us</h3>

          <form class="newsletter" @submit.prevent>
            <label class="newsletter__label" for="email">Email *</label>
            <input
              id="email"
              type="email"
              class="newsletter__input"
              required
            />

            <label class="newsletter__check">
              <input type="checkbox" />
              <span>Yes, subscribe me to your newsletter. *</span>
            </label>

            <button class="btn-solid" type="submit">Subscribe</button>
          </form>
        </div>

        <!-- Right: Phone, Address, Links -->
        <div class="connect__right">
          <div class="contact">
            <div class="tel">03 - 435 7367</div>

            <div class="address">
              Visit Us at Our Headquarter Office:
              <br />
              Maharanis
              <br />
              Bangsar Village, Upper Ground Floor unit 6, Jalan
              <br />
              Telawi 1 59100 Kuala Lumpur Kuala Lumpur
            </div>

            <nav class="links">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About Us</router-link>
              <router-link to="/product">Product</router-link>
              <router-link to="/ContactUs">Contact Us</router-link>
            </nav>

            
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Product", to: "/product" },
        { label: "Contact Us", to: "/ContactUs" }
      ]
    };
  }
};
</script>

<style scoped>
/* Navbar container */
.custom-navbar-wrapper {
  position: relative;
  background-color: #f4efe9;
  border: none;
  padding: 0.5rem 2rem;
}

/* Brand text on left */
.navbar-brand {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: bold;
  color: black;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

/* Menubar styles */
.custom-navbar {
  background-color: #f4efe9;
  border: none;
  justify-content: center !important;
}

.custom-navbar .p-menubar-root-list {
  justify-content: center !important;
  width: 100%;
}

.custom-navbar .p-menuitem-link,
.custom-navbar .p-menuitem-text {
  color: black !important;
}

.custom-navbar .p-menuitem-link:hover,
.custom-navbar .p-menuitem-link:focus,
.custom-navbar .p-menuitem-link:active {
  background-color: white !important;
  color: black !important;
}

.custom-navbar .p-menuitem.p-highlight > .p-menuitem-link,
.custom-navbar .p-menuitem-link.p-focus {
  background-color: white !important;
  color: black !important;
}

.custom-navbar .p-menuitem.p-highlight > .p-menuitem-link .p-menuitem-text,
.custom-navbar .p-menuitem-link.p-focus .p-menuitem-text {
  color: black !important;
}

.active-link {
  font-weight: 600;
  text-decoration: underline;
}

/* Footer styles (unchanged) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;500;600&display=swap');

:root,
.connect {
  --beige: #f4efe8;
  --ink: #1c1f1e;
  --line: #d7d1c8;
  --btn-dark: #2f3a36;
}
.connect {
  background: var(--beige);
  padding: 26px 18px 48px;
  border-top: 1px solid #e3ded7;
  color: var(--ink);
  font-family: Inter, system-ui, sans-serif;
}
.connect__inner {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 48px;
}
.brand {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  margin-bottom: 10px;
}
.connect__title {
  font-family: "Playfair Display", serif;
  font-size: 38px;
  line-height: 1.1;
  margin: 0 0 18px;
}
.newsletter__label {
  display: block;
  font-size: 12px;
  margin: 6px 0 6px;
}
.newsletter__input {
  display: block;
  width: min(420px, 92%);
  border: none;
  border-bottom: 1px solid var(--line);
  background: transparent;
  height: 36px;
  outline: none;
  font-size: 14px;
  margin-bottom: 14px;
}
.newsletter__check {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 12px;
  margin: 8px 0 16px;
}
.newsletter__check input {
  width: 14px;
  height: 14px;
}
.btn-solid {
  display: inline-block;
  width: min(420px, 92%);
  background: var(--btn-dark);
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 12px 16px;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
}
.btn-solid:hover {
  filter: brightness(0.95);
}
.connect__right {
  display: flex;
  justify-content: flex-end;
}
.contact {
  max-width: 420px;
  width: 100%;
}
.tel {
  font-size: 13px;
  margin-bottom: 10px;
}
.address {
  font-size: 12px;
  line-height: 1.75;
  margin-bottom: 18px;
}
.links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.links a {
  color: var(--ink);
  font-size: 12px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.links a:hover {
  border-bottom-color: var(--ink);
}
.social {
  display: flex;
  gap: 8px;
  align-items: center;
}
.social .dot {
  width: 16px;
  height: 16px;
  border: 1px solid var(--ink);
  border-radius: 50%;
  display: inline-block;
}
@media (max-width: 980px) {
  .connect__inner {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .connect__title {
    font-size: 30px;
  }
}
</style>
