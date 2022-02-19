<template>
  <main id="login" class="container">
    <div class="hero-text">
      <img src="@/assets/login-stock.png" alt="" />
      <h1>
        <span class="green">Welcome back!</span><br />
        We miss you
      </h1>
      <!-- <p>Your first step toward a better financial lifestyle starts here.</p> -->
    </div>
    <div class="hero-form">
      <form>
        <header>
          <h1>Holla</h1>
          <p>Sign in to the vibe</p>
        </header>

        <div class="page-error" v-show="loginError">
          {{ loginError }}
        </div>
        <div class="signup-message" v-show="signupMessage">
          {{ signupMessage }}
        </div>
        <app-input>
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email or Username"
            @focus="addGreen"
            @blur="removeGreen"
          />
        </app-input>
        <app-input>
          <label for="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter Password"
            @focus="addGreen"
            @blur="removeGreen"
          />
        </app-input>

        <button type="submit">Login</button>

        <div class="help-text">
          <p>
            Don't have an account?
            <router-link :to="{ name: 'Signup' }" class="green"
              >Register here</router-link
            >
          </p>
        </div>

        <div class="terms">
          <p>
            By clicking on Login, you agree to our
            <router-link class="green" :to="{ name: 'Home' }"
              >Terms & Conditions and Privacy Policy</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import AppInput from "@/components/AppInput";
export default {
  name: "Login",
  components: {
    AppInput,
  },
  props: {
    signupMessage: String,
  },
  data() {
    return {
      loginError: null,
    };
  },
  methods: {
    addGreen(e) {
      e.target.previousElementSibling.classList.add("green");
    },
    removeGreen(e) {
      e.target.previousElementSibling.classList.remove("green");
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  .hero-text {
    // border: 1px solid red;
    width: 35%;
    align-self: flex-start;
    transform: translateY(100px);

    img {
      display: block;
      width: auto;
      height: 200px;
      margin: 20px 0 20px;
    }
    h1 {
      font-weight: 900;
      color: $black;
      line-height: 51px;
      margin-bottom: 20px;
      font-family: "Circular Std", sans-serif;
      font-size: 2.5rem;
    }
    p {
      color: $black;
      line-height: 27px;
      font-family: "Circular Std", sans-serif;
      font-size: 1.3125rem;
    }
  }
  .hero-form {
    width: 50%;

    form {
      background: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
      border-radius: 6px;
      display: block;
      padding: 40px 70px;

      header {
        margin-bottom: 60px;

        h1 {
          font-family: "Circular Std", sans-serif;
          color: #1b2420;
        }
        p {
          color: #30443c;
          font-weight: 400;
        }
      }
    }

    .group {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .input-box.half {
        width: 45%;
      }
    }
    .input-box {
      width: 100%;
      margin-bottom: 30px;

      label {
        display: inline-block;
        line-height: 20px;
        color: #30443c;
        font-weight: 700;
        margin-bottom: 7px;
        font-family: "Nunito sans", sans-serif;

        &.green {
          color: $brand-color !important;
        }
      }
      input {
        display: block;
        width: 100%;
        height: 45px;
        border-radius: 4px;
        border: 1px solid #cad0c9;
        padding: 0 10px;
        outline: none;
        font-family: "Circular Std", sans-serif;
        color: $black;
        font-weight: 400;
        letter-spacing: 0.05rem;
        font-size: 1.125rem;

        &:focus {
          border-color: $brand-color;
        }
        &::placeholder {
          font-style: italic;
          color: #30443c;
          font-weight: 500;
          opacity: 0.5;
          font-family: "Nunito sans", sans-serif;
        }
      }

      .error-message {
        color: red;
        font-weight: 600;
      }
    }

    button {
      width: 100%;
      padding: 20px;
      border-radius: 3px;
      color: $black;
      background: $brand-color;
      outline: none;
      border: none;
      text-transform: uppercase;
      font-weight: 900;
      cursor: pointer;
      transition: 0.2s ease;
      font-family: "Circular Std", sans-serif;
      letter-spacing: 0.666667px;

      &:hover {
        background: darken($color: $brand-color, $amount: 15%);
      }
    }

    .help-text {
      text-align: center;
      margin: 30px 0 20px;
      font-weight: 700;
      color: #30443c;
      font-family: "Nunito sans", sans-serif;
    }

    .terms {
      width: 90%;
      position: relative;
      text-align: center;
      margin: 10px auto;
      padding: 0 20px;
      color: #97a19d;
      line-height: 1.5;
    }
  }
}
</style>
