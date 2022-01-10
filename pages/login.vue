<template>
  <div class="pg-login-register">
    <BaseHeader :withMenu="false" />
    <div class="wrapper-content main-container">
      <component :is="activeComponent"></component>
    </div>
    <BaseFooter/>
  </div>
</template>
<script>
import LoginForm from '@/components/Auth/LoginForm.vue'
import RegisterForm from '@/components/Auth/RegisterForm.vue'

export default {
  name: "LoginRegisterPage",
  head() {
    return {
      title: `${this.$route.name === 'login' ? 'Masuk' : 'Daftar'} | Triasse`
    }
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  computed: {
    activeComponent() {
      if (this.$route.name === 'login') {
        return LoginForm;
      }
      return RegisterForm;
    }
  },
  mounted() {
    // console.log(this.$route.name)
  }
}
</script>
<style lang="scss" scoped>
  .pg-login-register {
    .wrapper-content {
      background: #EFEFEF;
    }
  }
</style>
