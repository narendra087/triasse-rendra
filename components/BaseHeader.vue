<template>
  <div class="header-section">
    <div class="header-content bottom-header">
      <nuxt-link to="/">
        <img src="@/assets/img/img-brand-logo@3x.png" alt="triasse-brand-logo">
      </nuxt-link>
      <div v-if="withMenu" class="bottom-content">
        <a href="#" class="bottom-item">Paket Test Darah</a>
        <a href="#" class="bottom-item">Laboratorium</a>
        <a href="#" class="bottom-item">Artikel</a>
        <client-only>
        <div v-if="isLoggedIn" class="content-user">
          <img src="@/assets/img/img-icon-note.svg" class="note-img"/>
          <div v-if="user" class="user">
            <img :src="require(`~/assets/img/${user.image}`)" alt="">
            <p class="user-name">{{user.name}}</p>
          </div>
        </div>
        <div v-else class="content-auth">
          <button class="bottom-item btn-secondary" @click="$router.push('/login')">Masuk</button>
          <button class="bottom-item btn-primary" @click="$router.push('/register')">Daftar</button>
        </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BaseHeader",
  props: {
    withMenu: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
      user: "auth/user",
    }),
    // isLoggedIn() {
    //   return this.$store.state.auth.isLoggedIn;
    // },
  },
  mounted() {
    console.log(this.isLoggedIn)
  }
}
</script>

<style lang="scss" scoped>
  .header-section {
    background: $clr-white;
    position: sticky;
    top: 0;
    z-index: 99;
    box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
    .header-content {
      padding: 0 145px;
      &.bottom-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        img {
          width: 100px;
          min-width: 100px;
        }
        .bottom-content {
          display: flex;
          align-items: center;
          .bottom-item {
            margin-right: 30px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        .content-user {
          display: flex;
          align-items: center;
          img {
            min-width: unset;
            &.note-img {
              width: 25px;
              min-width: unset;
            }
          }
          .user {
            margin-left: 30px;
            padding: 10px;
            border: 1px solid #CECECE;
            display: flex;
            align-items: center;
            img {
              width: 25px;
              margin-right: 10px;
            }
            p {
              color: $clr-90;
            }
          }
        }
      }
    }
  }
</style>
