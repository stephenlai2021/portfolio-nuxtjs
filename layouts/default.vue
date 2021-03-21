<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row wrapper">
        <div class="col-lg-3 col-md-12 col-left">
          <Sidebar />
        </div>
        <div class="col-lg-9 col-md-12 content">
          <Nuxt />
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #278f6e;
  --secondary: #374a59;
  --light-100: #efefef;
  --light-300: #afafaf;
  --light-500: #979797;
  --light-700: #707070;
  --light-900: #313131;
  --vue-green: #4fc08d;
  --react-blue: #61fafb;
  --node-red: #ff3e00;
  --fb-yellow: #ffca28;
  --mongo-green: #4fc08d;
  --bgColor: var(--light-100);
  --bg-input: #d5d5d6;
}

[data-theme="dark"] {
  --primary: #4fc08d;
  --secondary: #374a59;
  --light-100: #101010;
  --light-300: #707070;
  --light-500: #cecece;
  --light-700: #cecece;
  --light-900: #cecece;
  --bgColor: #2c3e50;
  --bg-input: #e9e6f5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Rubik', sans-serif;
  background: var(--bgColor);
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
}

.col-left {
  padding-left: 0;
}

.wrapper {
  padding-top: 50px;
}

.foot {
  margin-top: 3rem;
}

@media (max-width: 992px) {
  .content {
    padding-top: 30px;
  }
  .wrapper {
    padding-top: 50px;
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding-top: 0;
  }
  .col-left {
    padding-right: 0;
  }
}
</style>
