<template>
  <div class="section-content pt-5">
    <div class="lab-image">
      <img src="@/assets/img/img-mitra-1.png" alt="image-mitra">
    </div>
    <div class="lab-image">
      <img src="@/assets/img/img-mitra-2.png" alt="image-mitra">
    </div>
    <div class="lab-image">
      <img src="@/assets/img/img-mitra-3.png" alt="image-mitra">
    </div>
    <div class="lab-image">
      <img src="@/assets/img/img-mitra-4.png" alt="image-mitra">
    </div>
    <div class="lab-image">
      <img src="@/assets/img/img-mitra-5.png" alt="image-mitra">
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .section-content {
    display: grid;
    grid-template-columns: repeat((auto-fill, minmax(161px, 1fr)));
    grid-template-columns: repeat(5, 1fr);
    gap: 48px;
    align-items: center;
    .lab-image {
      img {
        width: 100%;
      }
    }
  }
</style>
