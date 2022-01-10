<template>
  <div class="search-card" @click="handleNavigation(searchData.id)">
    <div class="searchcard-image">
      <img :src="require(`~/assets/img/${searchData.image}`)" :alt="`image-${searchData.title}`">
    </div>
    <div class="row w-100">
      <div class="col-md-8 col-12 h-100">
        <div class="searchcard-content p-md-3">
          <div class="content-type mb-3">
            <div v-for="type in searchData.type" :key="type.id" :class="`type ${type.id}`">
              <p>{{type.name}}</p>
            </div>
          </div>
          <div class="content-price-mobile">
            <div class="content-price-info">
              <p class="price-discount">Hemat {{searchData.discount}}%</p>
              <p class="price-actual">Rp{{searchData.actual_price}}</p>
            </div>
            <p class="price-now">Rp{{searchData.price}}</p>
          </div>
          <p class="content-title">{{searchData.title}}</p>
          <p class="content-address">{{searchData.address}}</p>
          <div class="content-additional">
            <div class="content-rating">
              <img src="@/assets/img/img-star-yellow.svg" alt="star">
              <p class="rating">{{searchData.rating}}/5</p>
            </div>
            <div class="content-info">
              <p v-for="(info, index) in searchData.info" :key="index" class="info">{{info}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12 h-100">
        <div class="searchcard-price">
          <p class="price-discount">Hemat {{searchData.discount}}%</p>
          <p class="price-actual">Rp{{searchData.actual_price}}</p>
          <p class="price-now">Rp{{searchData.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchCard",
  props: {
    searchData: Object,
  },
  methods: {
    handleNavigation(id){
      if (id) {
        this.$router.push('/detail/'+id)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .search-card {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    display: flex;
    border-radius: 10px;
    cursor: pointer;
    .searchcard-image {
      border-radius: 10px 0 0 10px;
      img {
        height: 100%;
        object-fit: cover;
        width: 200px;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          width: 100px;
        }
      }
    }
    .searchcard-content {
      position: relative;
      height: 100%;
      border-right: 1px solid #CECECE;
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        padding: 10px;
      }
      .content-type {
        width: 100%;
        display: inline-block;
        .type {
          display: inline-block;
          border-radius: 30px;
          padding: 2px 10px;
          color: $clr-white;
          width: auto;
          p {
            width: max-content;
            text-transform: uppercase;
            font-size: 12px;
          }
          &:not(:last-child) {
            margin-right: 10px;
          }
          &.lab {
            background: $clr-green;
          }
          &.home {
            background: $clr-primary;
          }
        }
      }

      .content-title {
        @include font-bold;
        @include webkit-box(2);
      }
      .content-address {
        color: $clr-90;
        @include webkit-box(2);
      }
      .content-additional {
        position: absolute;
        bottom: 15px;
        display: flex;
        align-items: center;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          display: none;
        }
        .content-rating {
          display: flex;
          align-items: center;
          img {
            margin-right: 5px;
          }
          p {
            @include font-bold;
            color: $clr-60;
          }
        }
        .content-info {
          display: inline-block;
          margin-left: 20px;
          p {
            display: inline-block;
            font-size: 14px;
            color: $clr-90;
            &:before {
              content: '\00B7';
              margin-right: 5px;
            }
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
      }
    }

    .content-price-mobile {
      display: none;
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        display: block;
      }
      .content-price-info {
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          display: flex;
          align-items: center;
        }
      }
    }

    p {
      &.price-discount {
        padding: 3px;
        background: $clr-lightred;
        color: $clr-red;
        font-size: 12px;
        @include font-bold;
        width: fit-content;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          margin-right: 5px;
          font-size: 10px;
        }
      }
      &.price-actual {
        text-decoration: line-through;
        color: $clr-90;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          margin-right: 10px;
        }
      }
      &.price-now {
        color: $clr-primary-alt;
        font-size: 24px;
        @include font-bold;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          font-size: 20px;
        }
      }
    }

    .col-md-4 {
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        display: none;
      }
    }
    .searchcard-price {
      position: absolute;
      top: 50%;
      left: calc(50% - 15px);
      transform: translate(-50%, -50%);
    }
  }
</style>
