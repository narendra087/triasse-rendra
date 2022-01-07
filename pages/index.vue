<template>
  <div class="pg-homepage">
    <BaseHeader />
    <div class="wrapper-content main-container">
      <div class="homepage-banner">
        <img src="@/assets/img/img-big-banner.jpg" alt="big-banner">
      </div>
        <div class="homepage-section section-one">
          <div class="form-wrapper">
            <div class="form-header">
              <div class="form-title">
                <p class="section-title">Pilih jenis pemeriksaan</p>
                <p class="section-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <img src="@/assets/img/img-doctor.svg" alt="doctor-image">
            </div>
            <div class="form-content">
              <h1>hehehe</h1>
            </div>
          </div>
        </div>
        <div class="homepage-section section-two full-container">
          <div class="secondary-container">
            <p class="section-title">Mengapa harus Triasse?</p>
            <p class="section-subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div class="section-content row">
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
          </div>
        </div>
        <div class="homepage-section section-three"></div>
        <div class="homepage-section section-four"></div>
        <div class="homepage-section section-fifth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>
<style lang="scss" scoped>
  .pg-homepage {
    .homepage-banner {
      margin: 0 -65px;
      img {
        object-fit: cover;
        height: 300px;
        width: 100%;
      }
    }
    .homepage-section {
      .section-title {
        @include font-bold;
        font-size: 26px;
      }
      .section-subtitle {
        font-size: 14px;
      }
      &.section-one {
        .form-wrapper {
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
          border-radius: 10px;
          position: relative;
          bottom: 45px;
          .form-header {
            justify-content: space-between;
            border-radius: 10px 10px 0 0;
            background: $clr-secondary;
            align-items: center;
            padding: 0 80px;
            display: flex;
          }
          .form-content {
            padding: 15px 80px;
          }
        }
      }
      &.section-two {
        background: $clr-secondary;
        p {
          text-align: center;
        }
        .section-content {
          padding-top: 60px;
          .content-img {
            background: $clr-placeholder;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            &.small-img {
              min-width: 80px;
              width: 80px;
              height: 80px;
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
                  text-align: left;
                  &.content-title {
                    @include font-bold;
                    margin-bottom: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
