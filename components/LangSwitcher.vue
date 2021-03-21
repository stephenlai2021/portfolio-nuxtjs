<template>
  <select v-model="$store.state.lang" @change="setLang($store.state.lang)">
    <option v-for="item in optionLang" :value="item.value" :key="item.id">
      {{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: '',
      optionLang: [
        { text: 'English', value: 'en', id: 1 },
        { text: '中文', value: 'zh', id: 2 },
      ],
    }
  },
  methods: {
    setLang(value) {
      // console.log(`lang: ${value}`)

      this.$store.commit('setLang', value)
      this.$i18n.locale = value

      if (process.client) {
        localStorage.setItem('lang', value)
      }

      console.log(`store: ${this.$store.state.lang}`)
      console.log(`localStore: ${localStorage.getItem('lang')}`)
    },
  },
  mounted() {
    console.log(`store: ${this.$store.state.lang}`)
    console.log(`localStore: ${localStorage.getItem('lang')}`)
  },
}
</script>

<style scoped>
select {
  border: none;
  outline: none;
  background: var(--bgColor);
  font-size: 22px;
  color: var(--light-700);
  width: 100px;
}
@media (max-width: 992px) {
  select {
    font-size: 16px;
  }
}
</style>
