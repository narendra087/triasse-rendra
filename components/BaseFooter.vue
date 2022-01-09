<template>
  <div class="footer-section">
    <Newsletter />
    <div class="footer-container main-container py-5">
      <div class="row">
        <div class="col-xl-3">
          <img class="footer-image mb-3" src="@/assets/img/img-brand-logo-white@3x.png" alt="brand-white">
          <p class="footer-desc">Platform pertama untuk tes laboratorium dan pemeriksaan kesehatan di Indonesia yang memberikan pelanggan kemampuan untuk membuat keputusan yang lebih baik bagi kesehatan mereka.</p>
        </div>
        <div class="col-xl-2">
          <p class="footer-title mb-3">Lainnya</p>
          <ul>
            <li>
              <nuxt-link to="#">Syarat & Ketentuan</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Karier</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Kebijakan Privasi</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Cara Kerja</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Login</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-xl-2">
          <p class="footer-title mb-3">Hubungi Kami</p>
          <ul>
            <li>
              <a href="mailto:cs@triasse.com">cs@triasse</a>
            </li>
            <li>
              <a href="tel:021-35760497">021-35760497</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=628111122015" target="_blank">0811-1122-015</a>
            </li>
            <li>
              Senin - Jumat
            </li>
            <li>
              (09.00 - 18.00)
            </li>
          </ul>
        </div>
        <div class="col-xl-3">
          <p class="footer-title mb-3">Alamat</p>
          <p class="footer-address">Gedung Perkantoran Madison Park, Lantai 6 Unit B. No. 02. Jl. Letjen S. Parman Kav 28, Jakarta 11470</p>
        </div>
        <div class="col-xl-2">
          <p class="footer-title mb-2">Media Sosial</p>
          <div class="social-wrapper">
            <div class="social-item">
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-facebook.svg" alt="">
              </a>
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-instagram.svg" alt="">
              </a>
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-linkedin.svg" alt="">
              </a>
            </div>
            <div class="social-item">
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-pinteres.svg" alt="">
              </a>
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-twitter.svg" alt="">
              </a>
              <a href="#" class="social-img">
                <img src="@/assets/img/img-icon-youtube.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright py-4">
      Copyright © 2020 PT. Digital Medika Informatik. All rights reserved.
    </div>
  </div>
</template>
<script>
import Newsletter from '@/components/Newsletter.vue'

export default {
  name: "BaseFooter",
  components: {
    Newsletter
  },
}
</script>
<style lang="scss" scoped>
  .footer-section {
    background: $clr-primary;
    p, a, li {
      color: $clr-white;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        margin-bottom: 5px;
      }
    }
    .footer-image {
      width: 74px;
    }
    .footer-desc {
      font-size: 14px
    }
    .footer-title {
      @include font-bold;
    }
    .social-wrapper {
      display: grid;
      gap: 10px;
      .social-item {
        display: flex;
        align-items: center;
        a {
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }

    .footer-copyright {
      text-align: center;
      background: $clr-primary-dark;
      color: $clr-white;
      font-size: 14px;
    }
  }
</style>
