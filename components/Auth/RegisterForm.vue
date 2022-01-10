<template>
  <div class="auth-form register-form">
    <div class="row justify-content-center">
      <div class="card-form col-lg-5 col-sm-8 col-11">
        <div class="form-header mb-3">
          <p class="form-title">Daftar</p>
          <p class="form-subtitle">Sudah punya akun? <span @click="$router.push('/login')">Masuk</span></p>
        </div>
        <div class="form-body">
          <input class="form-input" type="email" placeholder="Nomor Telepon">
          <button class="btn-primary-alt">Kirim kode OTP</button>
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
        <div class="form-agreement">
          Dengan mendaftar, <span>Saya setuju dengan Syarat, Ketentuan dan Kebijakan dari Triasse,</span> & <span>Kebijakan Privasi</span>
        </div>
      </div>
      <div class="col-12 align-self-center">
        <div class="row justify-content-center form-exclusive">
          <div class="col-lg-5">
            <input type="radio" name="exclusive" id="exclusive">
            <label for="exclusive">Saya ingin mendapatkan penawaran eksklusif dan promosi dari Triasse.</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

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

      .form-agreement {
        padding-top: 20px;
        text-align: center;
        span {
          cursor: pointer;
          color: $clr-primary-light;
        }
      }
    }

    .form-exclusive {
      padding-top: 30px;
      input {
        margin-right: 15px;
      }
    }
  }
</style>
