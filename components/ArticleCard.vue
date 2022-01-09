<template>
  <div class="article-card">
    <div class="article-image">
      <img :src="require(`~/assets/img/${articleData.image}`)" :alt="`image ${articleData.title}`">
    </div>
    <div class="article-content pt-4">
      <p class="article-title mb-3">{{articleData.title}}</p>
      <p class="article-desc">{{articleData.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articleData: Object,
  }
}
</script>

<style lang="scss" scoped>
  .article-card {
    .article-image {
      border-radius: 10px;
      img {
        width: 100%;
        border-radius: 10px
      }
    }
    .article-content {
      .article-title {
        @include font-bold;
      }
      .article-desc {
        color: $clr-90;
      }
    }
  }
</style>
