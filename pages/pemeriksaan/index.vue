<template>
  <div class="pg-pemeriksaan">
    <ContactHeader />
    <BaseHeader />
    <div class="wrapper-content">
      <SearchFilter class="search" />
      <div class="main-container py-sm-5 py-3">
        <div class="secondary-container">
          <div class="row">
            <div class="filter-section col-xl-3 col-12 mb-xl-0 mb-5">
              <p class="filter-section-text mb-xl-5 mb-3">Filter hasil pencarian</p>
              <div class="filter-content">
                <div class="filter-card p-md-4 p-3">
                  <p class="filter-title mb-3">Harga</p>
                  <div class="filter-option">
                    <div class="filter-item">
                      <div class="box"></div>
                      <p class="filter-text">Terendah - tertinggi</p>
                    </div>
                    <div class="filter-item">
                      <div class="box"></div>
                      <p class="filter-text">Tertinggi - terendah</p>
                    </div>
                  </div>
                </div>
                <div class="filter-card p-md-4 p-3">
                  <p class="filter-title mb-3">Jenis Layanan</p>
                  <div class="filter-option">
                    <div class="filter-item">
                      <div class="box"></div>
                      <p class="filter-text">Home service</p>
                    </div>
                    <div class="filter-item">
                      <div class="box"></div>
                      <p class="filter-text">Datang ke lab</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-section col-xl-9 col-12">
              <SearchCard v-for="card in cardData" :key="card.id" :searchData="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>
<script>
import cardData from "@/mock/dummy.json";
import SearchFilter from '@/components/SearchFilter.vue'
import SearchCard from '@/components/SearchCard.vue'

export default {
  name: 'CariPemeriksaan',
  head() {
    return {
      title: 'Cari Pemeriksaan dan Laboratorium | Triasse'
    }
  },
  components: {
    SearchFilter,
  },
  data() {
    return {
      cardData,
      SearchFilter,
      SearchCard,
    }
  },

}
</script>
<style lang="scss" scoped>
  .pg-pemeriksaan {
    .filter-section {
      .filter-section-text {
        font-size: 20px;
        @include font-bold;
      }
      .filter-content {
        display: grid;
        height: fit-content;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
        border-radius: 10px;
        @media screen and (min-width: $mobile-end) and (max-width: $tablet) {
          grid-template-columns: repeat(2, 1fr);
        }
        .filter-card {
          &:not(:last-child) {
            border-bottom: 1px solid #CECECE;
            @media screen and (min-width: $mobile-end) and (max-width: $tablet) {
              border-bottom: unset;
              border-right: 1px solid #CECECE;
            }
          }
          .filter-title {
            @include font-bold;
          }
          .filter-option {
            display: grid;
            gap: 10px;
            height: fit-content;
            .filter-item {
              display: flex;
              .box {
                width: 20px;
                height: 20px;
                border: 1px solid #CECECE;
                margin-right: 10px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .content-section {
      display: grid;
      gap: 30px;
      height: fit-content;
    }
  }
</style>
