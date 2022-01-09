<template>
  <div class="wrapper-content py-5">
    <div class="main-container">
      <div class="secondary-container">
        <p class="newsletter-text">Berlangganan newsletter spesial promo dan penawaran terbaik</p>
        <div class="newsletter-form">
          <input type="email" name="newsletter-email" id="newsletter-email" placeholder="Masukkan email Anda">
          <button class="btn-primary-alt">Berlangganan</button>
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
  .wrapper-content {
    background: $clr-primary-light;
    .secondary-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        @include font-bold;
        color: $clr-white;
        font-size: 20px;
        padding-right: 30px;
      }
      .newsletter-form {
        display: flex;
        input {
          height: 50px;
          width: 300px;
          border-radius: 10px 0 0 10px;
          border: none;
          padding: 0 15px;
        }
        button {
          height: 50px;
          border-radius: 0 10px 10px 0;
        }
      }
    }
  }
</style>
