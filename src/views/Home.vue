<template>
  <main id="home">
    <img src="@/assets/stock-img.png" />
    <h1>Fundall Expense Tracker</h1>
    <p>Mini project frontend</p>
    <small>by Babatunde Fashola</small>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#home {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Circular Std", sans-serif;

  img {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    font-family: "Circular Std", sans-serif;
  }
  p {
    font-size: 2.5rem;
    font-weight: 400;
    font-family: "Circular Std", sans-serif;
  }
  small {
    margin-top: 74px;
    font-family: "Circular Std", sans-serif;
    font-size: 1.5rem;
  }
}
</style>
