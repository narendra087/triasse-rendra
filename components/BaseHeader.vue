<template>
  <div class="header-section main-container">
    <div class="header-content bottom-header secondary-container">
      <div class="navigation-mobile">
        <img @click="toggleNavigation(true)" src="@/assets/img/menu.png" alt="">
      </div>
      <nuxt-link to="/">
        <img class="logo" src="@/assets/img/img-brand-logo@3x.png" alt="triasse-brand-logo">
      </nuxt-link>
      <div class="bottom-content desktop-elm">
        <a href="#" class="bottom-item">Paket Test Darah</a>
        <a href="#" class="bottom-item">Laboratorium</a>
        <a href="#" class="bottom-item">Artikel</a>
        <client-only>
        <div v-if="isLoggedIn" class="content-user">
          <img src="@/assets/img/img-icon-note.svg" class="note-img"/>
          <div v-if="user" @mouseover="hoverUser = true" @mouseleave="hoverUser = false" class="user" :class="{'hovered': hoverUser}" @click="logoutUser()">
            <img v-if="!hoverUser" :src="require(`~/assets/img/${user.image}`)" alt="">
            <p class="user-name">{{hoverUser ? 'Logout' : user.name}}</p>
          </div>
        </div>
        <div v-else class="content-auth">
          <button class="bottom-item btn-secondary" @click="$router.push('/login')">Masuk</button>
          <button class="bottom-item btn-primary" @click="$router.push('/register')">Daftar</button>
        </div>
        </client-only>
      </div>
    </div>
    <div v-if="navigationOpen" class="navigation-popup">
      <div class="navigation-header">
        <img @click="toggleNavigation(false)" src="@/assets/img/img-arrow-back.svg" alt="">
      </div>
      <div class="navigation-content">
        <div v-if="!isLoggedIn" class="navigation-action">
          <button class="bottom-item btn-secondary" @click="$router.push('/login')">Masuk</button>
          <button class="bottom-item btn-primary" @click="$router.push('/register')">Daftar</button>
        </div>
        <div v-else class="navigation-user">
          <img :src="require(`~/assets/img/${user.image}`)" alt="">
          <p class="user-name">{{user.name}}</p>
        </div>
        <nuxt-link to="/" class="navigation-item">Beranda</nuxt-link>
        <nuxt-link to="#" class="navigation-item">Test Lab</nuxt-link>
        <nuxt-link to="#" class="navigation-item">Artikel</nuxt-link>
        <p v-if="isLoggedIn" @click="logoutUser()" class="navigation-item logout">Logout</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BaseHeader",
  data() {
    return {
      hoverUser: false,
      navigationOpen: false,
    }
  },
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
  methods: {
    ...mapActions({
      logoutUser: 'auth/logoutUser',
    }),
    toggleNavigation(val) {
      this.navigationOpen = val
    }
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
    .navigation-popup {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: $clr-white;
      z-index: 999;
      box-shadow: 4px 6px 12px 0 rgb(0 0 0 / 6%);
      @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
        width: 300px;
      }
      @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
        width: 100%;
      }
      .navigation-header {
        padding: 20px;
        background: $clr-placeholder;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          padding: 10px;
        }
        img {
          cursor: pointer;
        }
      }
      .navigation-content {
        padding: 20px;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          padding: 10px;
        }
      }
      .navigation-user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #CECECE;
        padding-bottom: 20px;
        margin-bottom: 20px;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          border-bottom: 1px solid #CECECE;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }
        img {
          margin-right: 10px;
          width: 50px;
          height: 50px;
        }
      }
      .navigation-action {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        border-bottom: 1px solid #CECECE;
        padding-bottom: 20px;
        margin-bottom: 20px;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          border-bottom: 1px solid #CECECE;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }
      }
      .navigation-item {
        cursor: pointer;
        display: block;
        &:not(:last-child) {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #CECECE;
          @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
            border-bottom: 1px solid #CECECE;
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
        }
        &.logout {
          color: $clr-red;
        }
      }
    }
    .header-content {
      .navigation-mobile {
        display: none;
        @media screen and (min-width: $mobile-end) and (max-width: $tablet) {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
            left: 25px;
          }
          @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
            left: 15px;
          }
        }
        img {
          cursor: pointer;
          @media screen and (min-width: $tablet-end) and (max-width: $tablet) {
            height: 35px;
            width: 35px;
            min-width: 35px;
          }
          @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
            height: 20px;
            width: 20px;
            min-width: 20px;
          }
        }
      }
      &.bottom-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        @media screen and (min-width: $mobile-end) and (max-width: $tablet) {
          justify-content: center;
        }
        img.logo {
          width: 100px;
          min-width: 100px;
          @media screen and (min-width: $mobile-end) and (max-width: $mobile) {
            width: 50px;
            min-width: 50px;
          }
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
            cursor: pointer;
            &.hovered {
              background: $clr-red;
              p {
                color: $clr-white;
              }
            }
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
