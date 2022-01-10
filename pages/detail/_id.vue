<template>
  <div class="pg-detail">
    <ContactHeader />
    <BaseHeader />
    <div class="wrapper-content main-container">
      <div class="secondary-container">
        <div class="row py-sm-5 py-3">
          <div class="col-lg-8 col-12">
            <div class="content-detail">
              <div class="content-image">
                <img src="@/assets/img/img-article-1.jpg" alt="image-article-1">
              </div>
              <div class="content-primary p-md-5 p-4">
                <p class="content-title mb-4">Paket Skrining Diabetes Melitus</p>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores voluptatum tenetur ipsum nam sint quisquam repellat, eaque at? Eligendi nostrum accusantium quod dicta soluta distinctio veritatis voluptatibus cum quo.<br><br>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem debitis veritatis perspiciatis sed recusandae impedit, provident accusamus repellendus qui optio vero aperiam, inventore, adipisci possimus magnam fugit natus accusantium amet?<br><br>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero iusto animi voluptatibus? Optio reprehenderit esse exercitationem animi ex doloribus nam, soluta est quasi omnis! Excepturi perferendis ab deleniti doloremque.<br><br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur earum facilis doloremque distinctio cum quia eos possimus commodi fuga. Sit officiis consequatur iste qui exercitationem reiciendis incidunt ipsum perspiciatis!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-lg-0 mt-4">
            <div class="content-lab p-4">
              <p class="lab-title">Paket Skrining Diabetes Mellitus</p>
              <hr>
              <div class="lab-info">
                <img class="lab-image" src="@/assets/img/img-hospital-example.jpg" alt="img-hospital">
                <div class="lab-description">
                  <p class="lab-name">Parahita Buncit</p>
                  <div class="lab-rating">
                    <img src="@/assets/img/img-star-yellow.svg" alt="star">
                    <p class="rating">4.8</p>
                  </div>
                  <p class="lab-address">Jl. Warung Buncit Raya 150 Jakarta Selatan</p>
                  <div class="lab-action">
                    <img src="@/assets/img/img-icon-pin.svg" alt="icon-pin">
                    <p class="lab-map">Lihat peta</p>
                  </div>
                </div>
              </div>
              <hr>
              <div class="lab-additional">
                <p class="additional-item">&#183; Tidak bisa reschedule</p>
                <p class="additional-item">&#183; Tidak bisa refund</p>
              </div>
              <hr>
              <div class="lab-price">
                <div class="price-discount">
                  <p class="discount">Hemat 20%</p>
                  <p class="actual-price">Rp270.500</p>
                </div>
                <p class="price-now">Rp150.578</p>
              </div>
              <button class="btn-primary-alt mt-3 w-100">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter />
  </div>
</template>
<script>
export default {
  name: 'DetailPemeriksaan',
  head() {
    return {
      title: 'Detail Pemeriksaan dan Laboratorium | Triasse'
    }
  },
}
</script>
<style lang="scss" scoped>
  .pg-detail {
    .content-detail {
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      .content-image {
        img {
          width: 100%;
        }
      }
      .content-primary {
        .content-title {
          font-size: 24px;
          @include font-bold;
        }
      }
    }

    .content-lab {
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      border-radius: 10px;
      hr {
        margin: 20px 0;
      }
      .lab-title {
        font-size: 20px;
        @include font-bold;
      }
      .lab-info {
        display: flex;
        .lab-image {
          margin-right: 10px;
          width: 70px;
          height: 70px;
        }
        .lab-description {
          display: grid;
          gap: 5px;
          .lab-name {
            @include font-bold;
          }
          .lab-rating {
            display: flex;
            align-items: center;
            p {
              font-size: 14px;
            }
            img {
              margin-right: 5px;
              width: 15px;
              height: 15px;
            }
          }
          .lab-address {
            color: $clr-90;
            font-size: 14px;
          }
          .lab-action {
            display: flex;
            align-items: center;
            img {
              margin-right: 5px;
              width: 15px;
              height: 15px;
            }
            .lab-map {
              font-size: 14px;
              color: $clr-primary;
            }
          }
        }
      }

      .lab-additional {
        p {
          font-size: 14px;
          color: $clr-90;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
      .lab-price {
        text-align: center;
        .price-discount {
          display: flex;
          align-items: center;
          justify-content: center;
          .discount {
            padding: 3px;
            background: $clr-lightred;
            color: $clr-red;
            font-size: 12px;
            @include font-bold;
            width: fit-content;
            margin-right: 5px;
          }
          .actual-price {
            text-decoration: line-through;
            color: $clr-90;
          }
        }
        .price-now {
          color: $clr-primary;
          font-size: 24px;
          @include font-bold;
        }
      }
    }
  }
</style>
