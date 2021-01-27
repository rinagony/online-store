<template>
  <div id="footer">
    <div class="container">
      <div class="footerWrp">
        <router-link to="/">
          <img class="logo" src="@/assets/images/logo.png" alt="" />
        </router-link>
        <p id="policeTxt">© 2020 Clothe Store | Privacy Policy</p>
        <div class="social">
          <a href="#">
            <img src="@/assets/images/soc1.png" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/images/soc2.png" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/images/soc3.png" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/images/soc1.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      social: [
        {
          fb: "facebook.com",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.logo {
  max-width: 150px;
}

#footer {
  padding: 0.1rem 1rem;
   background: linear-gradient(to right, #c28a10 0, #ecc46d 100%);
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.1rem 2.5rem;
  }
}

.footerWrp {
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.1rem 2.5rem;
  }
}

.social {
  img {
    margin-top: 2rem;
    margin-right: 2rem;
  }
}

#policeTxt {
  margin-top: 2rem;
  font-weight: 600;
  color: #fff;
}
</style>
