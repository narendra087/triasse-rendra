<template>
  <div class="form-wrapper">
    <div class="form-header secondary-container">
      <div class="form-title">
        <p class="section-title">Pilih jenis pemeriksaan</p>
        <p class="section-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <img src="@/assets/img/img-doctor.svg" alt="doctor-image">
    </div>
    <div class="form-content secondary-container py-4">
      <div class="row">
        <div class="form-item col-md-6 col-xl-4 mb-3">
          <label for="provinsi" class="form-label">Provinsi</label>
          <button @click="handleToggleFilter('province')" class="btn-form with-icon" :class="{'not-placeholder': activeFilter && activeFilter.province}">
            <img src="@/assets/img/img-icon-pin.svg" alt="">
            {{activeFilter && activeFilter.province ? activeFilter.province : 'Pilih provinsi'}}
            <img class="chevron-img" src="@/assets/img/img-icon-chevron-right.svg" alt="">
          </button>
          <SearchFilterPopUp listOf="province" v-if="openFilter === 'province'" :optionSelected="selectedProvince" @closeFilter="handleToggleFilter" />
        </div>
        <div class="form-item col-md-6 col-xl-4 mb-3">
          <label for="provinsi" class="form-label">Kota/Kabupaten</label>
          <button @click="handleToggleFilter('city')" class="btn-form with-icon" :class="{'not-placeholder': activeFilter && activeFilter.city}">
            <img src="@/assets/img/img-icon-pin-map.svg" alt="">
            {{activeFilter && activeFilter.city ? activeFilter.city : 'Pilih kota/kabupaten'}}
            <img class="chevron-img" src="@/assets/img/img-icon-chevron-right.svg" alt="">
          </button>
          <SearchFilterPopUp listOf="city" v-if="openFilter === 'city'" :optionSelected="selectedCity" @closeFilter="handleToggleFilter" />
        </div>
        <div class="form-item col-md-12 col-xl-4 mb-3">
          <label for="provinsi" class="form-label">Paket & Jenis Pemeriksaan</label>
          <button @click="handleToggleFilter('examination')" class="btn-form with-icon" :class="{'placeholder': !examinationType || !examinationType.length}">
            <img src="@/assets/img/img-icon-stetoscop.svg" alt="">
            Pilih paket atau jenis pemeriksaan
          </button>
          <SearchFilterPopUp listOf="examination" v-if="openFilter === 'examination'" />
        </div>
      </div>
      <div class="form-action">
        <button class="btn-primary-alt" @click="handleSearch">Cari lab</button>
      </div>
    </div>
  </div>
</template>
<script>
import SearchFilterPopUp from '@/components/PopUp/SearchFilterPopUp.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'FormWrapper',
  data() {
    return {
      selectedProvince: '',
      selectedCity: '',
      examinationType: [],
      openFilter: '',
    }
  },
  components: {
    SearchFilterPopUp,
  },
  computed: {
    ...mapGetters({
      activeFilter: "filter/activeFilter",
    }),
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    handleSearch() {
      this.$router.push('/pemeriksaan')
    },
    handleToggleFilter(filter) {
      if (filter) {
        if (filter === this.openFilter) {
          this.openFilter = ''
        } else {
          this.openFilter = filter
        }
      } else {
        this.openFilter = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .form-wrapper {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    &.search {
      .form-header, .form-content {
        padding: 15px 145px;
        @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
          padding: 15px 60px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          padding: 15px 25px;
        }
      }
    }
    &.home {
      position: relative;
      bottom: 45px;
      border-radius: 10px;
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        bottom: 0;
      }
    }
    .form-title {
      width: calc(100% - 350px);
      @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
        width: calc(100% - 300px);
      }
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        width: calc(100% - 150px);
      }
    }
    .form-header {
      padding-top: 25px;
      justify-content: space-between;
      border-radius: 10px 10px 0 0;
      background: $clr-secondary;
      align-items: center;
      // padding: 0 80px;
      display: flex;
      position: relative;
      img {
        position: absolute;
        bottom: 0;
        right: 145px;
        width: 300px;
        @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
          width: 250px;
          right: 60px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          width: 150px;
          right: 25px;
        }
      }
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
    }
    .form-content {
      .form-item {
        position: relative;
        label {
          font-size: 14px;
          margin-bottom: 5px;
        }
        button {
          width: 100%;
          font-size: 14px;
          color: $clr-90;
          &.not-placeholder {
            color: $clr-black;
          }
          img {
            position: absolute;
            left: 15px;
            &.chevron-img {
              transform: translateY(-50%) rotate(90deg);
              left: unset;
              right: 10px;
              top: 50%;
            }
          }
        }
      }

      .form-action {
        display: flex;
        justify-content: flex-end;
        button {
          min-width: 197px;
        }
      }
    }
  }
</style>
