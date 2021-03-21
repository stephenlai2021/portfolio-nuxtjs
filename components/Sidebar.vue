<template>
  <div class="sidebar">
    <div class="top">
      <div class="left">
        <div class="image-box">
          <img class="avatar" src="/icon.png" alt="me image" />
        </div>
        <div class="text">
          <div class="title">{{ $t('title') }}</div>
          <div class="subtitle">{{ $t('subtitle') }}</div>
        </div>
      </div>
      <div class="btn-box">
        <button>{{ $t('btnFollow') }}</button>
      </div>
    </div>
    <ul>
      <li>
        <a href="/">
          <img class="icon" src="/images/location.png" alt="location icon" />
          <span class="info">{{ $t('sidebarLocation') }}</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img class="icon" src="/images/gmail.png" alt="gmail icon" />
          <span class="info">{{ $t('sidebarEmail') }}</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img class="icon" src="/images/github.png" alt="github icon" />
          <span class="info">{{ $t('sidebarGithub') }}</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img class="icon" src="/images/facebook.png" alt="email icon" />
          <span class="info">{{ $t('sidebarFacebook') }}</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img class="icon" src="/images/medium.png" alt="medium icon" />
          <span class="info">{{ $t('sidebarMedium') }}</span>
        </a>
      </li>
      <li>
        <a href="/">
          <img class="icon" src="/images/medium.png" alt="medium icon" />
          <span class="info">{{ $t('sidebarMedium') }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sidebar {
  padding-left: 15px;
  display: flex;
  flex-direction: column;
}
.top {
  text-align: center;
  width: 210px;
}
.avatar {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}
img {
  width: 25px;
  border-radius: 50%;
}
.title {
  font-size: 30px;
  font-weight: 400;
  color: var(--primary);
}
.subtitle {
  font-size: 18px;
  color: var(--light-900);
  font-weight: 300;
}
button {
  display: none;
}
ul {
  padding: 0;
  margin: 0;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
li {
  list-style: none;
}
a {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 15px;
}
.icon-location {
  width: 25px;
  height: 25px;
}
.info {
  font-size: 20px;
  color: var(--light-700);
  font-weight: 300;
}
.text {
  margin-bottom: 50px;
}
@media (max-width: 992px) {
  .sidebar {
    border-bottom: 1px solid #efefef;
  }
  ul {
    display: none;
  }
  .avatar {
    margin-right: 20px;
    margin-bottom: 0;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    margin-bottom: 50px;
  }
  .left {
    display: flex;
    height: 150px;
  }
  .text {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .subtitle {
    font-size: 18px;
  }
  button {
    display: block;
    height: 40px;
    padding: 0 30px;
    border-radius: 30px;
    border: 2px solid var(--primary);
    font-size: 14px;
    background: white;
    color: var(--primary);
    font-weight: 300;
  }
}
@media (max-width: 768px) {
  .sidebar {
    padding: 30px 15px;
    border-bottom: 1px solid #efefef;
  }
  ul {
    display: none;
  }
  .avatar {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    margin-bottom: 0;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    margin-bottom: 0;
  }
  .left {
    display: flex;
    height: 70px;
  }
  .text {
    align-items: flex-start;
  }
  .title {
    font-size: 24px;
    color: var(--primary);
  }
  .subtitle {
    font-size: 16px;
  }
}
@media (max-width: 575px) {
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    height: 40px;
  }
  .left {
    padding: 15px 0;
  }
  .title {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 3px;
  }
  .subtitle {
    font-size: 13px;
  }
}
</style>
