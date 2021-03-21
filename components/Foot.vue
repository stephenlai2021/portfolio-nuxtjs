<template>
  <div class="foot">
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <p class="text">&copy; {{ $t('footMessage1') }}</p>
            <p class="text">
              <a href="https://nuxtjs.org/">
                {{ $t('footMessage2') }}
              </a>
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 150px;
  background: var(--light-gray);
}
.box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */
}
.text {
  color: var(--light-700);
  font-size: 18px;
  font-weight: 300;
}
p {
  margin-bottom: 0;
}
a {
  text-decoration: none;
  color: var(--light-700);
}
@media (max-width: 768px) {
  .foot {
    height: 100px;
  }
  .box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 14px;
  }
}
@media (max-width: 360px) {
  .text {
    font-size: 10px;
  }
}
</style>
