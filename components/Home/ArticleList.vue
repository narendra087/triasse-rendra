<template>
  <div class="section-content pt-5">
    <div class="article-container">
      <ArticleCard
        v-for="data in cardData"
        :key="data.id"
        :articleData="data"
      />
    </div>
  </div>
</template>
<script>
import ArticleCard from '@/components/ArticleCard.vue'
import cardData from "@/mock/article.json";

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      cardData,
    }
  }
}
</script>
<style lang="scss" scoped>
  .article-container {
    display: grid;
    // grid-template-columns: repeat((auto-fill, minmax(250px, 1fr)));
    grid-template-columns: repeat((4, 1fr));
    gap: 20px;
    @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
      grid-template-columns: unset;
    }
  }
</style>
