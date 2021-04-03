<template>
  <div class="modal">
    <h1>Modal</h1>
    <p>work id: {{ $route.params.workId }}</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  outline: 0;
}
.fade {
  transition: opacity 0.15s linear;
}
</style>
