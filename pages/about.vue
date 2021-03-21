<template>
  <div class="about-page">
    <h1 class="page-title">
      {{ $t('aboutTitle') }}
    </h1>
    <h2 class="section-title">
      {{ $t('aboutSubtitle') }}
    </h2>
    <p class="intro">
      {{ $t('aboutIntro-1') }}<br />
      {{ $t('aboutIntro-2') }}
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('showHomePage', false)
  },
}
</script>

<style scoped>
.page-title {
  font-size: 18px;
  font-weight: 300;
  color: var(--light-500);
  margin-bottom: 10px;
}
.section-title {
  font-size: 30px;
  font-weight: 400;
  padding: 0 0 15px;
  margin: 0 0 30px;
  color: var(--primary);
  border-bottom: 1px solid var(-light-100);
}
.intro {
  font-size: 20px;
  font-weight: 300;
  color: var(--light-900);
  margin-bottom: 28px;
}
@media (max-width: 768px) {
  .section-title {
    font-size: 26px;
  }
  .intro {
    font-size: 18px;
    margin-bottom: 25px;
  }
}
@media (max-width: 575px) {
  .intro {
    font-size: 16px;
    margin-bottom: 22px;
  }
}
</style>
