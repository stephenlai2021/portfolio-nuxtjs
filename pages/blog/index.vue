<template>
  <div class="blog-page">
    <h2 class="page-title">Blog</h2>
    <h2 class="section-title">Latest articles on web development</h2>
    <div class="post" v-for="post in posts" :key="post.title">
      <NuxtLink :to="`/blog/${post.slug}`">
        <h1 class="post-title">{{ post.title }}</h1>
      </NuxtLink>
      <p class="post-date">{{ post.date }}</p>
      <p class="post-desc">{{ post.description.substring(0, 180) + ' ....' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts').fetch()

    return { posts }
  },
  created() {
    this.$store.commit('showHomePage', false)
  },
}
</script>

<style scoped>
.page-title {
  color: var(--light-500);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
}
.section-title {
  color: var(--primary);
  font-size: 30px;
  padding-bottom: 15px;
  margin-bottom: 30px;
  font-weight: 400;
  border-bottom: 1px solid var(--light-100);
}
.post {
  margin-bottom: 3rem;
}
.post-title {
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 5px;
  color: var(--primary);
}
.post-date {
  font-size: 18px;
  color: var(--light-300);
  font-weight: 300;
  margin-bottom: 10px;
}
.post-desc {
  font-size: 20px;
  line-height: 27px;
  font-weight: 300;
  color: var(--light-900);
}
a {
  color: var(--primary);
  text-decoration: none;
  transition: all 0.25s ease-in-out;
}
a .post-title:hover {
  color: green;
}
@media (max-width: 768px) {
  .section-title {
    font-size: 26px;    
  }
  .post-title {
    font-size: 26px;
  }
  .post-date {
    font-size: 16px;
  }
  .post-desc {
    font-size: 18px;
  }
  .post {
    margin-bottom: 2rem;
  }
}
@media (max-width: 575px) {
  .post-title {
    font-size: 24px;
  }
  .post-desc {
    font-size: 16px;
  }
}
</style>
