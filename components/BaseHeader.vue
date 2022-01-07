<template>
  <div class="header-section">
    <div v-if="showTop" class="header-content top-header">
      <div class="top-item">
        <img src="@/assets/img/img-calendar.svg" class="top-img"/>
        <p class="top-text mb-0">Senin - Jumat (09.00 - 18.00 WIB)</p>
      </div>
      <div class="top-item">
        <img src="@/assets/img/img-icon-note.svg" class="top-img"/>
        <p class="top-text mb-0">+62811 1122 015</p>
      </div>
      <div class="top-item">
        <img src="@/assets/img/img-email.svg" class="top-img"/>
        <p class="top-text mb-0">cs@triasse.com</p>
      </div>
    </div>
    <div class="header-content bottom-header">
      <nuxt-link to="/">
        <img src="@/assets/img/img-brand-logo@3x.png" alt="triasse-brand-logo">
      </nuxt-link>
      <div class="bottom-content">
        <a href="#" class="bottom-item">Paket Test Darah</a>
        <a href="#" class="bottom-item">Laboratorium</a>
        <a href="#" class="bottom-item">Artikel</a>
        <button class="bottom-item btn-secondary">Masuk</button>
        <button class="bottom-item btn-primary">Daftar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseHeader",
  props: {
    showTop: {
      type: Boolean,
      default: true,
    },
  },

}
</script>

<style lang="scss" scoped>
  .header-section {
    .header-content {
      padding: 0 145px;
      &.top-header {
        justify-content: flex-end;
        background: #EFEFEF;
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;
        .top-item {
          align-items: center;
          margin-right: 30px;
          display: flex;
          &:last-child {
            margin-right: 0;
          }
          img {
            margin-right: 5px;
            min-width: 15px;
            height: 15px;
            width: 15px;
          }
          p {
            color: #606060;
            font-size: 14px;
          }
        }
      }
      &.bottom-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        img {
          width: 100px;
          min-width: 100px;
        }
        .bottom-content {
          .bottom-item {
            margin-right: 20px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
