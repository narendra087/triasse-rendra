<template>
  <div class="section-content pt-5 row">
    <div class="col-6 big-content">
      <div class="content-img big-img"></div>
    </div>
    <div class="col-6 small-content">
      <div class="content-item">
        <div class="content-img small-img"></div>
        <div class="content-info">
          <p class="content-title">Jaminan harga terbaik</p>
          <p class="content-desc">Harga kompetitif di Laboratorium terbesar dan terpercaya di Indonesia seperti Prodia, Kimia Farma, Parahita,GS Lab & Biotest.</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-img small-img"></div>
        <div class="content-info">
          <p class="content-title">Layanan home service</p>
          <p class="content-desc">Pemeriksaan bisa dilakukan dari rumah sendiri dengan layanan Home Service, petugas datang untuk melakukan pengecekan dan tes.</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-img small-img"></div>
        <div class="content-info">
          <p class="content-title">Cicilan 4x dengan bunga 0%</p>
          <p class="content-desc">Pembayaran paket pemeriksaan lebih ringan karena bisa dicicil sebanyak empat kali, dan tanpa bunga tambahan</p>
        </div>
      </div>
      <div class="content-item">
        <div class="content-img small-img"></div>
        <div class="content-info">
          <p class="content-title">Pesan dan hasil online</p>
          <p class="content-desc">Pesan dan hasil pemeriksaan bisa dilakukan secara online, proses lebih cepat tanpa perlu antri di lab.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
  .section-content {
    padding-top: 60px;
    .content-img {
      background: $clr-placeholder;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      &.small-img {
        min-width: 100px;
        width: 100px;
        height: 100px;
      }
    }
    .small-content {
      display: grid;
      gap: 20px;
      .content-item {
        display: flex;
        .content-info {
          margin-left: 20px;
          p {
            &.content-title {
              @include font-bold;
              margin-bottom: 5px;
            }
            &.content-desc {
              @include webkit-box(3);
            }
          }
        }
      }
    }
  }
</style>
