<template>
  <div class="work-page">
    <h1 class="page-title">{{ $t('workTitle') }}</h1>
    <h2 class="section-title">
      {{ $t('workSubtitle') }}
    </h2>
    <div class="project-container">
      <div class="project" v-for="item in work" :key="item.id">
        <NuxtLink :to="`/work/${item.id}`">
          <img class="project-image" :src="item.image" alt="work image" />
          <h3 class="project-title">{{ item.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  head() {
    return {
      title: this.$i18n.t('workHead'),
      meta: [
        {
          name: '',
          content: '',
        },
      ],
    }
  },
  async asyncData({ $axios }) {
    // const work = await $axios.$get(process.env.baseURL + '/api')
    // const work = await $axios.$get('/api')

    // const work = await $axios.$get(process.env.baseURL + '/work.json')

    const res = await fetch(
      'https://my-portfolio-work-page-default-rtdb.firebaseio.com/work.json'
    )
    const data = await res.json()

    const work = []
    for (const key in data) {
      work.push({
        id: key,
        image: data[key].image,
        title: data[key].title,
      })
    }
    return { work }
  },
  created() {
    this.$store.commit('closeDropdown')
  },
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
