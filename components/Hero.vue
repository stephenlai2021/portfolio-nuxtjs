<template>
  <div class="hero">
    <div class="container">
      <h1>{{ $t('subtitle') }}</h1>
      <h2 class="skills">
        <span class="title-1">VueJS,</span>
        <span class="title-2">ReactJS,</span>
        <span class="title-3">NodeJS,</span>
        <span class="title-4">Firebase,</span>
        <span class="title-5">MongoDB</span>
      </h2>
      <button class="btn-work" @click="$router.push('/work')">
        {{ $t('heroBtnWork') }}
      </button>
      <button class="btn-contact" @click="$router.push('/contact')">
        {{ $t('heroBtnContact') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 500px;
  background-image: url('/images/hero-image.jpg');
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
h1 {
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 10px;
}
span {
  font-size: 36px;
  font-weight: 300;
}
.title-1 {
  color: var(--vue-green);
}
.title-2 {
  color: var(--react-blue);
}
.title-3 {
  color: var(--node-red);
}
.title-4 {
  color: var(--fb-yellow);
}
.title-5 {
  color: var(--mongo-green);
}
h2 {
  margin-bottom: 30px;
}
button {
  font-size: 24px;
  margin: 0 15px;
  border-radius: 30px;
  color: white;
  width: 200px;
  height: 60px;
  border: none;
  font-weight: 300;
  transition: all 0.3s ease-in;
}
.btn-work {
  background: #278f61;
}
.btn-work:hover {
  color: #278f61;
  border: 2px solid #278f61;
  background: transparent;
}
.btn-contact {
  background: transparent;
  border: 2px solid white;
}
.btn-contact:hover {
  background: white;
  color: #313131;
}
@media (max-width: 1024px) {
  button {
    font-size: 20px;
  }
}
@media (max-width: 992px) {
  .hero {
    height: 400px;
  }
  h1 {
    font-size: 30px;
  }
  span {
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  .hero {
    height: 300px;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  span {
    font-size: 24px;
  }
  button {
    width: 160px;
    height: 50px;
  }
}
@media (max-width: 575px) {
  h1 {
    font-size: 20px;
  }
  span {
    font-size: 18px;
  }
  button {
    width: 130px;
    height: 40px;
    font-size: 14px;
    margin: 0 5px;
  }
}
@media (max-width: 315px) {
  button {
    margin-bottom: 1rem;
  }
}
</style>
