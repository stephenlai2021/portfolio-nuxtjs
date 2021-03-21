<template>
  <div class="work-page">
    <h1 class="page-title">{{ $t('workTitle') }}</h1>
    <h2 class="section-title">
      {{ $t('workSubtitle') }}
    </h2>
    <div class="project-container">
      <div class="project" v-for="item in work" :key="item.id">
        <img class="project-image" :src="item.image" alt="work image" />
        <h3 class="project-title">{{ item.title }}</h3>
      </div>
      <!-- <h1 class="content">{{ $t('workTitle') }}</h1> -->
    </div>
  </div>
</template>

<script>
// what is wrong with this fetch ???
export default {
  async asyncData({ $axios }) {
    const work = await $axios.$get(process.env.baseURL + '/work.json')
    console.log(work)
    return { work }
  }
}
</script>

<style scoped>
.content {
  color: #cecece;
}
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
  border-bottom: 1px solid var(--light-100);
}
.project-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}
.project {
  margin: 0 15px 30px;
  /* padding: 0 15px; */
  border: 1px solid var(--light-100);
}
.project-title {
  font-size: 20px;
  font-weight: 300;
  color: var(--light-900);
  padding: 30px 15px;
  text-align: center;
}
.project-image {
  /* width: 255px; */
  object-fit: cover;
  width: 100%;
  height: 160px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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
