<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>
<style lang="scss">
@import url("http://fonts.cdnfonts.com/css/circular-std");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}
body {
  width: 100vw;
  height: 100vh;
  background: #fcfbfc;
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.green {
  color: $brand-color;
}

.page-error {
  background: #f72b2b;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 7px 0;
  margin-bottom: 15px;
  font-size: 0.8rem;
}
.signup-message {
  background: rgb(15, 126, 15);
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 7px 0;
  margin-bottom: 15px;
  font-size: 0.8rem;
}
</style>
