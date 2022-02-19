<template>
  <main id="dashboard">
    <div class="dashboard-info">
      <div class="user-info">
        <div class="user-image">
          <form enctype="multipart/form-data">
            <label for="image"
              ><img
                :src="userDetails.avatar"
                :alt="userDetails.firstname + ' profile picture'"
            /></label>
            <input type="file" id="image" @change="changeUserAvatar" hidden />
          </form>
        </div>
        <div class="user-name">
          <h1>{{ userDetails.firstname }} {{ userDetails.lastname }}</h1>
          <p>{{ userDetails.email }}</p>
        </div>
      </div>
      <div class="user-target">
        <h3>Target Monthly Expenses</h3>
        <h4>&#x20A6; 596,000</h4>
        <progress min="0" max="1000000" value="500000"></progress>
      </div>
      <div class="user-expense-table">
        <table>
          <caption>
            Daily Expenses Summary
          </caption>
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tr>
            <td><span class="dot"></span></td>
            <td>30 Nov, 2018</td>
            <td>&#x20A6;30,000</td>
          </tr>
          <tr>
            <td><span class="dot"></span></td>
            <td>30 Nov, 2018</td>
            <td>&#x20A6;30,000</td>
          </tr>
          <tr>
            <td><span class="dot"></span></td>
            <td>30 Nov, 2018</td>
            <td>&#x20A6;30,000</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="dashboard-form">
      <div class="header">
        <div class="header-text">
          <h2>
            <span class="green">Welcome back,</span> {{ userDetails.firstname }}
          </h2>
          <p>Now, let’s get your expenses for this month</p>
        </div>
        <img src="@/assets/dashboard-stock.png" alt="" />
      </div>
      <form class="expense-form">
        <app-input>
          <label for="tge">Target Monthly Expenses</label>
          <input type="text" id="tge" />
        </app-input>
        <app-input>
          <label for="date">Date</label>
          <input type="date" id="date" />
        </app-input>
        <app-input>
          <label for="tge">Today's Expenses</label>
          <div class="group">
            <input type="text" class="long" />
            <input type="text" class="short" />
          </div>
          <div class="group">
            <input type="text" class="long" />
            <input type="text" class="short" />
          </div>
          <div class="group">
            <input type="text" class="long" />
            <input type="text" class="short" />
          </div>
        </app-input>
        <app-input class="inline">
          <label for="total">Total Actual Expenses: &#x20A6;</label>
          <input type="text" id="total" />
        </app-input>

        <button type="submit">SAVE TODAY’S EXPENSES</button>
      </form>
    </div>
  </main>
</template>

<script>
import AppInput from "@/components/AppInput";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    AppInput,
  },
  data() {
    return {
      BASE_URL: "https://campaign.fundall.io/",
      userDetails: {},
    };
  },
  methods: {
    loadUserDetails() {
      const token = localStorage.getItem("fundall_token");

      const config = {
        method: "GET",
        url: this.BASE_URL + "api/v1/base/profile",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then((response) => {
          console.log(response);
          this.userDetails = response.data.success.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeUserAvatar(e) {
      const token = localStorage.getItem("fundall_token");

      const file = e.target.files[0];

      const userData = new FormData();

      userData.append("avatar", file);
      console.log(file);

      const config = {
        method: "POST",
        url: this.BASE_URL + "api/v1/base/avatar",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: userData,
      };

      axios(config)
        .then((response) => {
          console.log(response);
          this.loadUserDetails();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.loadUserDetails();
  },
};
</script>

<style lang="scss" scoped>
#dashboard {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  // border: 1px solid red;

  .dashboard-info {
    width: 40%;
    // border: 1px solid red;
    padding: 30px;

    .user-info {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .user-image {
        position: relative;

        img {
          width: 90px;
          height: 90px;
          display: inline-block;
          margin-right: 20px;
          border-radius: 15px;
          cursor: pointer;
        }
      }
      .user-name {
        h1 {
          color: #30443c;
          font-size: 1.75rem;
          font-family: "Circular Std", sans-serif;
          text-transform: capitalize;
        }
        p {
          color: #30443c;
          font-size: 1rem;
          font-family: "Circular Std", sans-serif;
          font-weight: 400;
        }
      }
    }

    .user-target {
      h3 {
        color: #30443c;
        font-weight: 400;
        font-size: 1.3rem;
        font-family: "Circular Std", sans-serif;
      }
      h4 {
        color: #30443c;
        font-weight: 900;
        font-size: 1.75rem;
        font-family: "Circular Std", sans-serif;
      }
      progress {
        appearance: none;
        width: 100%;
        height: 7px;
        border-radius: 50%;
        border: none;

        &::-webkit-progress-bar {
          background: #efefef;
          border-radius: 10px;
        }
        &::-webkit-progress-value {
          background: $brand-color;
          border-radius: 10px;
        }
      }
    }

    .user-expense-table {
      width: 80%;
      background: #ffffff;
      box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
      border-radius: 10px;
      margin-top: 45px;
      padding: 15px 15px 25px;

      table {
        width: 100%;
        border-radius: 5px;
        text-align: center;

        caption {
          color: #30443c;
          font-size: 0.875rem;
          line-height: 18px;
          text-align: left;
          margin-bottom: 15px;
          font-weight: 600;
        }
        td {
          padding: 20px 0;
          border-bottom: 1px solid #e3ece5;

          .dot {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: $brand-color;
          }

          &:last-child {
            font-weight: 600;
            color: $brand-color;
          }
          &:nth-child(2) {
            color: #30443c;
            font-weight: 400;
          }
        }
        tr {
          border-bottom: 0.5px solid #e3ece5;

          &:last-child {
            td {
              border-bottom: none;
            }
          }
        }
        th {
          color: #30443c;
          font-weight: 600;
          padding: 10px 0;
        }
      }
    }
  }

  .dashboard-form {
    width: 55%;
    // border: 1px solid red;
    padding: 30px;
    background: #f2f3f7;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    border-radius: 6px;
    transform: translateY(-30px);

    .header {
      position: relative;
      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
      border-radius: 6px;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-family: "Circular Std", sans-serif;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        font-size: 0.9rem;
        color: #30443c;
      }

      img {
        position: absolute;
        width: 180px;
        height: 120px;
        top: -45px;
        right: 15px;
      }
    }

    form {
      width: 100%;
      padding: 0 20px;
      margin: 25px 0 0;

      label {
        display: inline-block;
        color: #000000;
        font-size: 0.9rem;
        margin-bottom: 5px;
        color: #30443c;
      }
      input {
        width: 60%;
        height: 45px;
        border: 1px solid #cad0c9;
        border-radius: 4px;
        display: block;
        outline: none;
        padding: 0 15px;

        &:focus {
          border-color: $brand-color;
        }
      }

      .input-box {
        margin-bottom: 20px;

        &.inline {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          input {
            width: 7.2rem;
            margin-left: 10px;
          }
          label {
            color: $black;
            font-family: "Circular Std", sans-serif;
            font-weight: 700;
            font-size: 1rem;
          }
        }

        .group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .long {
            width: 65%;
          }
          .short {
            width: 30%;
          }
        }
      }

      button {
        display: block;
        width: auto;
        margin: 0 auto;
        background: $brand-color;
        color: $black;
        border: none;
        outline: none;
        text-transform: uppercase;
        border-radius: 15px;
        padding: 10px 15px;
        font-family: "Circular Std", sans-serif;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          background: darken($color: $brand-color, $amount: 15%);
        }

        &:focus {
          outline: 1px solid $black;
          outline-offset: 5px;
        }
      }
    }
  }
}
</style>
