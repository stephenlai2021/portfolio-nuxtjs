<template>
  <transition>
    <div class="dark-box" @click="toggleMode">
      <svg
        :class="{ 'dark-mode': isDarkmode }"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        ></path>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isDarkmode: false
    }
  },
  methods: {
    toggleMode() {
      this.isDarkmode = !this.isDarkmode
      if (this.isDarkmode) {
        console.log(`mode: Dark`)
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      }
      if (!this.isDarkmode) {
        console.log(`mode: Light`)
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    },
  }
}
</script>

<style scoped>
.dark-box {
  display: flex;
  align-items: center;
  /* margin-left: 1rem; */
}
.dark-mode {
  /* background: #c3e6cb; */
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
  svg {
    width: 20px;
    height: 20px;
    padding: 2px;
  }
}
</style>
