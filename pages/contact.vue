<template>
  <div class="contact-page">
    <h1 class="page-title">{{ $t('contactTitle') }}</h1>
    <h2 class="section-title">
      {{ $t('contactSubtitle') }}
    </h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="name">{{ $t('contactName') }}</label>
        <input required class="common" id="name" type="text" v-model="name" />
      </div>
      <div class="input-group">
        <label for="email">{{ $t('contactEmail') }}</label>
        <input
          required
          class="common"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="input-group">
        <label for="message">{{ $t('contactMessage') }}</label>
        <textarea
          required
          class="common"
          id="message"
          rows="10"
          v-model="message"
        ></textarea>
      </div>
      <div class="btn-container">
        <button>{{ $t('contactSend') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submitForm() {
      const contact = {
        name: this.name,
        email: this.email,
        message: this.message,
      }
      console.log(contact)
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
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
  border-bottom: 1px solid var(--light-100);
}
form {
  width: 683px;
}
.input-group {
  margin: 0 0 30px;
  display: flex;
  flex-direction: column;
}
label {
  font-size: 20px;
  font-weight: 300;
  color: var(--light-900);
  margin: 0 0 8px;
}
input {
  padding: 6px 12px;
  height: 50px;
}
textarea {
  padding: 10px 12px;
}
.common {
  border: 1px solid #ccc;
  /* background: #e8f0fe; */
  background: var(--bg-input);
  font-weight: 300;
  font-size: 20px;
}
.btn-container {
  display: flex;
  justify-content: center;
}
button {
  background: var(--primary);
  color: white;
  font-size: 20px;
  font-weight: 300;
  border-radius: 30px;
  border: none;
  height: 60px;
  width: 230px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease-in-out;
}
button:hover {
  background: white;
  color: var(--primary);
}
@media (max-width: 992px) {
  form {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .section-title {
    font-size: 26px;
  }
  .intro {
    font-size: 18px;
    margin-bottom: 25px;
  }
  label {
    font-size: 18px;
  }
  button {
    height: 50px;
  }
}
@media (max-width: 575px) {
  .intro {
    font-size: 16px;
    margin-bottom: 22px;
  }
  label {
    font-size: 16px;
  }
}
</style>
