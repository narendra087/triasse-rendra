<template>
  <div class="section-content pt-5">
    <div class="media-container">
      <!-- <div v-for="(media, index) in mediaList" :key="index" class="media-item"> -->
        <img v-for="(media, index) in mediaList" :key="index" :src="require(`~/assets/img/${media}`)" :alt="`media-coverage-${index}`">
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mediaList: [
        "img-media-coverage-1.png",
        "img-media-coverage-2.png",
        "img-media-coverage-3.png",
        "img-media-coverage-4.png",
        "img-media-coverage-5.png",
        "img-media-coverage-6.png",
        "img-media-coverage-7.png",
        "img-media-coverage-8.png",
        "img-media-coverage-9.png",
        "img-media-coverage-10.png",
        "img-media-coverage-11.png",
        "img-media-coverage-12.png"
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .media-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 -10px;
    img {
      flex-basis: calc(100%/9);
      margin: 10px;
    }
  }
</style>
