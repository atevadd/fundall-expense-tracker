<template>
  <div class="app-loader">
    <div class="app-loader-wrapper">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
};
</script>

<style lang="scss" scoped>
.app-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: $black, $alpha: 0.8);
  display: grid;
  place-content: center;
  z-index: 100;

  &-wrapper {
    position: relative;
    padding: 20px;
    background: #fff;
    border-radius: 10px;

    .loader {
      position: relative;
      width: 120px;
      height: 120px;
      border: 10px solid rgba($color: #000000, $alpha: 0.4);
      border-radius: 50%;

      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 10px solid rgba($color: green, $alpha: 1);
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
        border-radius: 50%;
        top: -10px;
        left: -10px;
        animation: rotate 1s linear infinite;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
