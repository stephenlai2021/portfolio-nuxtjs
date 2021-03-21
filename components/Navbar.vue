<template>
  <div class="main-header">
    <b-container>
      <b-row>
        <b-col cols="12" class="navbar">
          <NuxtLink to="/">
            <div class="logo">{{ $t('title') }}</div>
          </NuxtLink>
          <div class="menu-right">
            <div class="menu">
              <NuxtLink to="/">{{ $t('navbarHome') }}</NuxtLink>
              <NuxtLink to="/blog">{{ $t('navbarBlog') }}</NuxtLink>
              <NuxtLink to="/about">{{ $t('navbarAbout') }}</NuxtLink>
              <NuxtLink to="/work">{{ $t('navbarWork') }}</NuxtLink>
              <NuxtLink to="/contact">{{ $t('navbarContact') }}</NuxtLink>
              <LangSwitcher />
              <ModeSwitcher />
            </div>
            <!-- <span class="hamburger" @click="toggle"> -->
            <span class="hamburger" @click="$store.commit('toggle')">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </div>
          <transition>
            <Dropdown v-if="$store.state.isToggle" />
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      isToggle: false,
    }
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle
      // if (this.$store.state)
      this.$store.commit('toggle', this.isToggle)
    }
  },
}
</script>

<style scoped>
.menu-right {
  display: flex;
  align-items: center;
}
.main-header {
  border-bottom: var(--bottom);
}
.navbar {
  height: 112px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid var(--primary); */
  position: relative;
}
.logo {
  font-weight: 400;
  font-size: 38px;
  color: var(--primary);
  text-transform: uppercase;
}
.menu {
  width: 625px;
  display: flex;
  justify-content: space-between;
}
.hamburger {
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;
}
.hamburger .line {
  width: 22px;
  height: 3px;
  background: var(--light-700);
}
.dark-box {
  display: flex;
  align-items: center;
}
.dark-mode {
  background: var(--vue-green);
  transition: all 0.3s ease-in;
}
svg {
  width: 30px;
  height: 30px;
  padding: 3px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
}
@media (max-width: 992px) {
  .navbar {
    height: 90px;
  }
  .logo {
    font-size: 32px;
  }
  .menu {
    display: none;
  }
  .hamburger {
    display: flex;
    /* margin-right: 0; */
  }
  svg {
    width: 20px;
    height: 20px;
    padding: 2px;
    background: #c3e6cb;
    color: white;
    border-radius: 50%;
  }
}
@media (max-width: 768px) {
  .navbar {
    height: 70px;
  }
  .logo {
    font-size: 24px;
  }
}
@media (max-width: 575px) {
  .navbar {
    width: 100vw;
  }
}
a {
  text-decoration: none;
  color: var(--light-700);
  font-size: 22px;
  font-weight: 300;
}
a.nuxt-link-exact-active {
  color: var(--primary);
  font-weight: 400;
}
</style>
