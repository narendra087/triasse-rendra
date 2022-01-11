<template>
  <div class="section-content pt-5">
    <div class="card-container">
      <PromotionCard
        v-for="data in cardData"
        :key="data.id"
        :promotionData="data"
      />
    </div>
    <div class="promo-container pt-5 row">
      <div class="promo-banner col-md-6 col-12">
        <img src="@/assets/img/img-banner2-1.jpg" alt="promo-banner-1">
        <!-- <button class="btn-primary-alt">Sikat jon!</button> -->
      </div>
      <div class="promo-banner col-md-6 col-12">
        <img src="@/assets/img/img-banner2-2.jpg" alt="promo-banner-2">
        <!-- <button class="btn-primary-alt">Sikat jon!</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import PromotionCard from '@/components/PromotionCard.vue'
import cardData from "@/mock/promotion.json";

export default {
  data() {
    return {
      cardData,
    }
  },
  components: {
    PromotionCard,
  }
}
</script>
<style lang="scss" scoped>
  .section-content {
    .card-container {
      display: grid;
      // grid-template-columns: repeat((auto-fill, minmax(180px, 1fr)));
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .promo-container {
      .promo-banner {
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }
      img {
        width: 100%;
      }
    }
  }
</style>
