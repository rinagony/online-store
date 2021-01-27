<template>
  <div id="womenItem">
    <img
      class="clotheBarImg"
      :src="require('@/assets/images/' + productdata.img)"
      alt=""
    />
    <div class="wrapperClotheContent">
      <h5 class="textBar">{{ productdata.title }}</h5>
      <h5 class="priceItem">{{ productdata.price }}₽</h5>
      <router-link
        :to="'/opencard/' + productdata.id"
        class="ofertabtn accent-1 btn"
        >Open</router-link
      >
      <img
        src="@/assets/images/sale.png"
        v-show="productdata.oferta"
        class="salePic"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {
    productdata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
#womenItem {
  box-shadow: 3px 3px 0 #f5ea77;
}

.clotheBarImg {
  box-shadow: 0px 0px 2px 2px #f5ea77;
}
.logo {
  max-width: 150px;
}

// #footer {
//   padding: 0.5rem 1rem;
//   background: #faedde;
//   @include for-medium-up {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: justify;
//     -ms-flex-pack: justify;
//     justify-content: space-between;
//     padding: 1rem 2.5rem;
//   }
// }

// .footerWrp {
//   @include for-medium-up {
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-pack: justify;
//     -ms-flex-pack: justify;
//     justify-content: space-between;
//     padding: 1rem 2.5rem;
//   }
// }
.social {
  img {
    margin-top: 2rem;
    margin-right: 2rem;
  }
}

#policeTxt {
  margin-top: 2rem;
  font-weight: 600;
}

.btnNewStyle {
  background: #bd5a36;
}

.wrapperClotheContent {
  padding: 0 1rem;
}
</style>
