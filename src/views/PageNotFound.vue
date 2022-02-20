<template>
  <main id="not-found">
    <h1>Not found</h1>
    <p>😢😢Oops, the page you're looking for cannot be found</p>
    <router-link class="home-btn" :to="{ name: 'Home' }"
      >Go to Homepage</router-link
    >
  </main>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped>
#not-found {
  width: 70vw;
  height: 40vh;
  // border: 1px solid red;
  margin: 5% auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    text-transform: uppercase;
    // margin: 0 auto;
    font-size: 8rem;
    font-weight: 900;
    color: $brand-color;
    text-shadow: 0 20px 15px rgba($color: $brand-color, $alpha: 0.3);
    line-height: 1.1;
    // border: 1px solid red;
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
  }
  .home-btn {
    width: max-content;
    display: inline-block;
    text-align: center;
    margin-top: 30px;
    padding: 12px 25px;
    background: linear-gradient(45deg, $black 50%, $brand-color 50%);
    color: #fff;
    font-weight: 900;
    transition: background 1s ease;

    &:hover {
      background: linear-gradient(45deg, $black 85%, $brand-color 25%);
      // animation: slide 1.2s ease;
    }
  }
}

@keyframes slide {
  0% {
    background: linear-gradient(45deg, $black 50%, $brand-color 50%);
  }
  50% {
    background: linear-gradient(45deg, $black 60%, $brand-color 40%);
  }
  100% {
    background: linear-gradient(45deg, $black 80%, $brand-color 20%);
  }
}
</style>
