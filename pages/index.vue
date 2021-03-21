<template>
  <article>
    <div class="post" v-for="post in posts" :key="post.title">
      <NuxtLink :to="`/blog/${post.slug}`">
        <h1 class="post-title">{{ post.title }}</h1>
      </NuxtLink>
      <p class="post-date">
        <svg class="w-6 h-6 icon-clock" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{{ post.date }}</span>        
      </p>
      <div class="content">
        <div class="right">
          <p class="post-desc">{{ post.description.substring(0, 180) + ' ....' }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts').fetch()

    return { posts }
  },
  created() {
    this.$store.commit('showHomePage', true)
  },
  computed: {
    truncatedDesc() {
      return 
    }
  }
}
</script>

<style scoped>
.icon-clock {
  width: 16px;
  height: 16px;
}
.left {
  display: flex;
  align-items: flex-start;
  margin-right: .8rem;
}
.left img {
  border-radius: .5rem;
}
.content {
  display: flex;
  padding-top: 0;
}
.post {
  margin-bottom: 2rem;
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
