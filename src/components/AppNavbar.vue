<template>
  <nav>
    <div class="container">
      <h1 class="brand-icon">
        <router-link :to="{ name: 'Home' }"
          ><img src="@/assets/fundall-logo.png" alt=""
        /></router-link>
      </h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: relative;
  padding: 20px 0;
}
</style>
