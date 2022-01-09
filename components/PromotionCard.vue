<template>
  <div class="promotion-card">
    <div class="promotion-image">
      <img :src="require(`~/assets/img/${promotionData.image}`)" :alt="`image ${promotionData.title}`">
    </div>
    <div class="promotion-content pt-2 pb-4 px-2">
      <p class="promotion-title mb-2">{{promotionData.title}}</p>
      <p class="promotion-sub mb-1">Harga mulai dari</p>
      <p class="promotion-price mb-1">{{promotionData.price}}</p>
      <p class="promotion-discount">{{promotionData.discount_price}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    promotionData: Object,
  }
}
</script>

<style lang="scss" scoped>
  .promotion-card {
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
      .promotion-image {
        img {
          object-fit: cover;
          width: 100%;
          height: 181px;
          border-radius: 10px 10px 0 0;
        }
      }
      .promotion-content {
        .promotion-title {
          @include font-bold;
        }
        .promotion-sub {
          color: #909090;
          font-size: 14px;
        }
        .promotion-price {
          color: #909090;
          font-size: 14px;
        }
        .promotion-discount {
          @include font-bold;
          color: $clr-primary;
        }
      }
  }
</style>
