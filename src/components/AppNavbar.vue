<template>
  <nav>
    <div class="container">
      <h1 class="brand-icon">
        <router-link :to="{ name: 'Home' }"
          ><img src="@/assets/fundall-logo.png" alt=""
        /></router-link>
      </h1>

      <div class="btns" v-show="showNavBtn">
        <router-link :to="{ name: 'Login' }" class="login">LOG IN</router-link>
        <router-link :to="{ name: 'Signup' }" class="signup"
          >SIGN UP</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      showNavBtn: true,
    };
  },
  watch: {
    $route: function () {
      if (this.$route.path !== "/") {
        this.showNavBtn = false;
      } else {
        this.showNavBtn = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: relative;
  padding: 20px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btns {
    .login {
      margin-right: 15px;
      color: $black;
      font-family: "Circular Std", sans-serif;
      font-size: 1.125rem;
    }
    .signup {
      padding: 10px 15px;
      background: #4ce895;
      border-radius: 10px;
      color: $black;
      font-family: "Circular Std", sans-serif;
      font-size: 1.125rem;

      &:hover {
        background: darken($color: $brand-color, $amount: 15%);
      }
    }
  }
}
</style>
