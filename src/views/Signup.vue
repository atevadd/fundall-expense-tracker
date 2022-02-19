<template>
  <main id="signup" class="container">
    <div class="hero-text">
      <img src="@/assets/stock-img.png" alt="" />
      <h1><span class="green">Welcome!</span> Let's get to know you.</h1>
      <p>Your first step toward a better financial lifestyle starts here.</p>
    </div>
    <div class="hero-form">
      <form @submit.prevent="registerUser">
        <div class="page-error" v-show="signupError">{{ signupError }}</div>
        <div class="group">
          <app-input class="half">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter First Name"
              @focus="addGreen"
              @blur="removeGreen"
              v-model="userDetails.firstname"
            />
          </app-input>
          <app-input class="half">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Enter Last Name"
              @focus="addGreen"
              @blur="removeGreen"
              v-model="userDetails.lastname"
            />
          </app-input>
        </div>
        <app-input>
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            @focus="addGreen"
            @blur="removeGreen"
            v-model="userDetails.email"
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
            v-model="userDetails.password"
          />
        </app-input>
        <app-input>
          <label for="cpass">Confirm Password</label>
          <input
            type="password"
            id="cpass"
            placeholder="Confirm Password"
            @focus="addGreen"
            @blur="removeGreen"
            v-model="userDetails.password_confirmation"
          />
        </app-input>

        <button type="submit">Sign up</button>

        <div class="help-text">
          <p>
            Already have an account?
            <router-link :to="{ name: 'Login' }" class="green"
              >Login Here</router-link
            >
          </p>
        </div>
      </form>

      <div class="terms">
        <p>
          By clicking on Login, you agree to our
          <router-link class="green" :to="{ name: 'Home' }"
            >Terms & Conditions and Privacy Policy</router-link
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import AppInput from "@/components/AppInput";
import axios from "axios";

export default {
  name: "Signup",
  components: {
    AppInput,
  },
  data() {
    return {
      BASE_URL: "https://campaign.fundall.io/",
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      signupError: null,
    };
  },
  methods: {
    addGreen(e) {
      e.target.previousElementSibling.classList.add("green");
    },
    removeGreen(e) {
      e.target.previousElementSibling.classList.remove("green");
    },
    registerUser() {
      this.$emit("show-loader", true);

      if (
        this.userDetails.password !== this.userDetails.password_confirmation
      ) {
        this.$emit("show-loader", false);
        this.signupError = "Passwords do not match";

        setTimeout(() => {
          this.signupError = null;
        }, 3000);
      } else {
        this.$emit("show-loader", false);

        const config = {
          method: "Post",
          url: this.BASE_URL + "api/v1/register",
          headers: {
            accept: "application/json",
          },
          data: this.userDetails,
        };

        axios(config)
          .then((response) => {
            if (
              response.status === 200 ||
              response.data.success.status === "SUCCESS"
            ) {
              this.$router.push({
                name: "Login",
                params: {
                  signupMessage: "Account successfully created",
                },
              });
            }
          })
          .catch((error) => {
            this.$emit("show-loader", false);

            this.signupError = error.response.data.error.message;

            setTimeout(() => {
              this.signupError = null;
            }, 4000);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#signup {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  .hero-text {
    // border: 1px solid red;
    width: 35%;
    align-self: flex-start;
    transform: translateY(50px);

    img {
      display: block;
      width: auto;
      height: 200px;
      margin: 20px auto 70px;
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
    position: relative;
    width: 50%;

    form {
      background: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
      border-radius: 6px;
      display: block;
      padding: 40px 70px;
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
          font-weight: 400;
          opacity: 0.5;
          font-family: "Nunito sans", sans-serif;
        }
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
      margin: 30px 0;
      font-weight: 700;
      color: #30443c;
      font-family: "Nunito sans", sans-serif;
    }

    .terms {
      width: 70%;
      position: relative;
      text-align: center;
      margin: 20px auto;
      padding: 0 20px;
      color: #97a19d;
      line-height: 1.5;
    }
  }
}
</style>
