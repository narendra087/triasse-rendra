<template>
  <div class="header-content top-header">
    <div class="top-item">
      <img src="@/assets/img/img-calendar.svg" class="top-img"/>
      <p class="top-text mb-0">Senin - Jumat (09.00 - 18.00 WIB)</p>
    </div>
    <div class="top-item">
      <img src="@/assets/img/img-icon-note.svg" class="top-img"/>
      <p class="top-text mb-0">+62811 1122 015</p>
    </div>
    <div class="top-item">
      <img src="@/assets/img/img-email.svg" class="top-img"/>
      <p class="top-text mb-0">cs@triasse.com</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header-content {
    padding: 0 145px;
    &.top-header {
      justify-content: flex-end;
      background: #EFEFEF;
      padding-bottom: 10px;
      padding-top: 10px;
      display: flex;
      .top-item {
        align-items: center;
        margin-right: 30px;
        display: flex;
        &:last-child {
          margin-right: 0;
        }
        img {
          margin-right: 5px;
          min-width: 15px;
          height: 15px;
          width: 15px;
        }
        p {
          color: $clr-60;
          font-size: 14px;
        }
      }
    }
  }
</style>
