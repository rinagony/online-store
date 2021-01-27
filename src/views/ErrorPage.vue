<template>
  <div class="error">
    <Menu />
    <div class="mainWrapper">    
      <div class="container">
        <div class="errorWrp">
          <img src='./../assets/images/404.png' class="responsive-img">
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'error',
  components: {
    Menu,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import './../assets/scss/styles.scss';
.error {
  margin: 0;
}
.mainWrapper {
  min-height: 550px;
}
</style>
