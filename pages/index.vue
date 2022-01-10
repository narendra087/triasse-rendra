<template>
  <div class="pg-homepage">
    <ContactHeader />
    <BaseHeader />
    <div class="wrapper-content main-container">
      <div class="homepage-banner">
        <img src="@/assets/img/img-big-banner.jpg" alt="big-banner">
      </div>
      <div class="homepage-section section-one">
        <SearchFilter class="home" />
      </div>
      <div class="homepage-section section-two bgn-secondary full-container py-sm-5 py-3">
        <div class="secondary-container">
          <p class="section-title text-center">Mengapa harus Triasse?</p>
          <p class="section-subtitle text-center">Proin egestas eu dui in vestibulum. Suspendisse sit amet sem non nunc tempor tincidunt.</p>
          <AboutTriasse />
        </div>
      </div>
      <div class="homepage-section section-three py-sm-5 py-3">
        <p class="section-title text-center">Lorem ipsum dolor sit amet</p>
        <p class="section-subtitle text-center">Proin egestas eu dui in vestibulum. Suspendisse sit amet sem non nunc tempor tincidunt.</p>
        <PromotionList />
      </div>
      <div class="homepage-section section-four bgn-secondary full-container py-sm-5 py-3">
        <div class="secondary-container">
          <p class="section-title text-center">Mitra Laboratorium Terbaik di Indonesia</p>
          <p class="section-subtitle text-center">Triasse tersedia di 44 cabang seluruh Indonesia, dengan sebaran di 16 kota besar yang bisa dipesan secara <i>online</i>.</p>
          <MitraList />
        </div>
      </div>
      <div class="homepage-section section-five py-sm-5 py-3">
        <p class="section-title text-center">Lorem ipsum dolor sit amet</p>
        <p class="section-subtitle text-center">Proin egestas eu dui in vestibulum. Suspendisse sit amet sem non nunc tempor tincidunt.</p>
        <ArticleList />
      </div>
      <div class="homepage-section section-six py-sm-5 py-3">
        <div class="secondary-container">
          <p class="section-title text-center">Media Coverage</p>
          <MediaList />
        </div>
      </div>
      <div class="homepage-section section-seven py-sm-5 py-3">
        <hr>
        <div class="secondary-container">
          <div class="section-content pt-5">
            <div class="content-item">
              <p class="content-title">Toko Furniture Online Terpercaya di Indonesia</p>
              <p class="content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima non sit excepturi quibusdam odio iste fuga distinctio, eum, officia sint dolorum eaque nam harum, deserunt libero quam dolores maxime?</p>
            </div>
            <div class="content-item">
              <p class="content-title">Belanja Mebel Custom Terlengkap di Bramble Furniture</p>
              <p class="content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima non sit excepturi quibusdam odio iste fuga distinctio, eum, officia sint dolorum eaque nam harum, deserunt libero quam dolores maxime?</p>
            </div>
            <div class="content-item">
              <p class="content-title">Situs Jual Beli Furniture Custom Terbaik di Indonesia</p>
              <p class="content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima non sit excepturi quibusdam odio iste fuga distinctio, eum, officia sint dolorum eaque nam harum, deserunt libero quam dolores maxime?</p>
            </div>
            <div class="content-item">
              <p class="content-title">Online Store dengan Produk Furniture Berkualitas Premium</p>
              <p class="content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima non sit excepturi quibusdam odio iste fuga distinctio, eum, officia sint dolorum eaque nam harum, deserunt libero quam dolores maxime?</p>
            </div>
            <div class="content-item">
              <p class="content-title">Gratis Ongkir Furniture Seluruh Jabodetabek</p>
              <p class="content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima non sit excepturi quibusdam odio iste fuga distinctio, eum, officia sint dolorum eaque nam harum, deserunt libero quam dolores maxime?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter.vue'
import AboutTriasse from '@/components/Home/AboutTriasse.vue'
import PromotionList from '@/components/Home/PromotionList.vue'
import MitraList from '@/components/Home/MitraList.vue'
import ArticleList from '@/components/Home/ArticleList.vue'
import MediaList from '@/components/Home/MediaList.vue'

export default {
  name: 'Homepage',
  head() {
    return {
      title: 'Homepage | Triasse'
    }
  },
  components: {
    SearchFilter,
    AboutTriasse,
    PromotionList,
    MitraList,
    ArticleList,
    MediaList,
  },
}
</script>
<style lang="scss" scoped>
  .pg-homepage {
    .homepage-banner {
      margin: 0 -65px;
      @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
        margin: 0 -25px;
      }
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        margin: 0 -15px;
      }
      img {
        object-fit: cover;
        height: 300px;
        width: 100%;
        @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
          height: 250px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          height: 100px;
        }
      }
    }
    .homepage-section {
      .section-title {
        @include font-bold;
        font-size: 26px;
        @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
          font-size: 20px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          font-size: 14px;
        }
      }
      .section-subtitle {
        margin-top: 10px;
        @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
          font-size: 14px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          font-size: 12px;
          margin-top: 5px;
        }
      }
      hr {
        border-color: #000;
      }
      &.section-one {
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          padding: 2rem 0;
        }
      }
      &.section-seven {
        .section-content {
          display: grid;
          gap: 20px;
          .content-title {
            @include font-bold;
            margin-bottom: 5px;
          }
          .content-desc {
            color: $clr-90;
          }
        }
      }
    }
  }
</style>
