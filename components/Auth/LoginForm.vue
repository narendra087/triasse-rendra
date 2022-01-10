<template>
  <div class="auth-form login-form">
    <div class="row justify-content-center">
      <div class="card-form col-lg-5 col-sm-8 col-11">
        <div class="form-header mb-3">
          <p class="form-title">Masuk</p>
          <p class="form-subtitle">Belum punya akun? <span @click="$router.push('/register')">Daftar</span></p>
        </div>
        <div class="form-body">
          <input class="form-input" type="email" placeholder="Nomor Telepon/Username/Email">
          <input class="form-input" type="password" placeholder="Password">
          <button class="btn-primary-alt" @click="handleLogin">Masuk</button>
          <div class="form-action">
            <p>Lupa Password</p>
            <p>Masuk dengan SMS</p>
          </div>
        </div>
        <div class="form-divider">
          <div class="line"></div>
          <div class="text">atau masuk dengan</div>
        </div>
        <div class="form-social">
          <button class="btn-facebook">
            <img src="@/assets/img/img-facebook.png" alt="">
            Facebook
          </button>
          <button class="btn-google">
            <img src="@/assets/img/img-google.png" alt="">
            Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'LoginForm',
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      loginUser: 'auth/loginUser',
    }),
    handleLogin(){
      this.loginUser();

      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .auth-form {
    padding: 100px 0;
    .card-form {
      background: $clr-white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
      .form-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .form-title {
          @include font-bold;
        }
        .form-subtitle {
          font-size: 14px;
          span {
            cursor: pointer;
            color: $clr-primary-light;
          }
        }
      }

      .form-body {
        display: grid;
        gap: 20px;
        input {
          width: 100%;
        }
        button {
          height: 50px;
          border-radius: 0;
        }
      }

      .form-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          color: $clr-primary-light;
          font-size: 14px;
        }
      }

      .form-divider {
        position: relative;
        padding: 40px 0;
        .line {
          height: 2px;
          background: $clr-90;
        }
        .text {
          background: $clr-white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 0 10px;
          color: $clr-90;
        }
      }

      .form-social {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        button {
          width: 100%;
          height: 50px;
          border-radius: 0;
          position: relative;
          img {
            position: absolute;
            width: 20px;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
