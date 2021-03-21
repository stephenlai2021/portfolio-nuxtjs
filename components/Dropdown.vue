<template>
  <div class="dropdown">
    <NuxtLink to="/">{{ $t('navbarHome') }}</NuxtLink>
    <NuxtLink to="/blog">{{ $t('navbarBlog') }}</NuxtLink>
    <NuxtLink to="/about">{{ $t('navbarAbout') }}</NuxtLink>
    <NuxtLink to="/work">{{ $t('navbarWork') }}</NuxtLink>
    <LangSwitcher />
    <div class="switch">
      <ModeSwitcher />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: '',
    }
  },
  mounted() {},
}
</script>

<style scoped>
.dropdown {
  position: absolute;
  top: 66px;
  right: 8px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.dropdown:after {
  content: '';
  position: absolute;
  right: 8px;
  width: 0;
  border-style: solid;
  border-width: 0 10px 10px;
  display: block;
  top: -10px;
  border-color: #fff transparent;
  z-index: 1;
}
select {
  margin: 10px;
  padding: 5px;
}
.switch {
  margin: 10px;
  /* display: flex;
  justify-content: center; */
}
a {
  text-decoration: none;
  padding: 10px;
  width: 150px;
  color: #707070;
  font-weight: 500;
  border-bottom: 1px solid #f2f3f3;
}
a.nuxt-link-exact-active {
  color: var(--primary);
}
@media (min-width: 992px) {
  .dropdown {
    display: none;
  }
}
</style>
