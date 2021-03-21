<template>
  <div>
    <h2 class="page-title">Blog</h2>
    <h1 class="post-title">{{ post.title }}</h1>
    <p class="post-date">
      <svg
        class="w-6 h-6 icon-clock"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>{{ post.date }}</span>
    </p>
    <nuxt-content :document="post" />
    <div class="comments">
      <h3 class="section-title">
        Comments
      </h3>
      <Disqus />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  created() {
    this.$store.commit('showHomePage', false)
  },
}
</script>

<style scoped>
.page-title {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 300;
  color: var(--lighter);
}
.post-title {
  font-size: 30px;
  font-weight: 400;
  color: var(--primary);
}
.post-date {
  font-size: 18px;
  color: var(--light);
  margin-bottom: 20px;
  font-weight: 300;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
}
.left {
  margin-right: 10px;
  display: flex;
  /* align-items: ; */
}
.icon-clock {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  /* border: 1px solid red; */
}
.comments {
  margin-top: 2rem;
}
.section-title {
  font-size: 30px;
  font-weight: 400;
  color: var(--primary);
  margin: 70px 0 30px;
  padding: 0 0 15px;
  border-bottom: 1px solid #efefef;
}
@media (max-width: 768px) {
  .post-title {
    font-size: 24px;
  }
  .post-date {
    font-size: 16px;
  }
  .section-title {
    font-size: 26px;
  }
}
</style>
