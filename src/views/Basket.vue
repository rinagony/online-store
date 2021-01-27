<template>
  <div id="basket">
    <Menu />
    <div class="mainWrapper">
      <div id="basketcom">
        <div class="wrpBasket">
          <div class="container">
            <img class="responsive-img" src="@/assets/images/hr.png" alt="" />
            <div v-if="!$store.state.cartCount" class="wrpNothing">
              <h3>
                You didn't add anything. Please,
                <router-link id="linkToProducts" to="/"
                  >Choose goods</router-link
                >
              </h3>
            </div>
            <div v-else class="wrpCart">
              <h4>My shopping cart</h4>
              <h5 class="numberOfGoals">
                Number of goods: {{ $store.state.cartCount }}
              </h5>
              <div class="wrpProductBar">
                <div
                  class="product_bar_item"
                  v-for="item in $store.state.cart"
                  :key="item.id"
                >
                  <div class="itemBasket">
                    <img
                      class="responsive-img imgbasket"
                      :src="require('@/assets/images/' + item.img)"
                      alt=""
                    />
                    <div class="basketItem">
                      <div class="wrpDesc">
                        <img
                          src="@/assets/images/sale.png"
                          v-show="item.oferta"
                          class="salePic"
                        />
                        <h4 class="titleOfTypeBasket">Description:</h4>
                        <p>{{ item.description }}</p>
                      </div>
                      <div class="wrpInWhat">
                        <h4 class="titleOfTypeBasket">Composition:</h4>
                        <ul>
                          <li>&#9675; {{ item.inWhat.item1 }}</li>
                          <li>&#9675; {{ item.inWhat.item2 }}</li>
                          <li>&#9675; {{ item.inWhat.item3 }}</li>
                        </ul>
                      </div>
                      <h5 class="textBar">{{ item.title }}</h5>
                      <div class="wrpPriceOferta"></div>
                      <h5 class="priceItem">{{ item.price }}₽</h5>
                    </div>
                    <div class="btnWrpBasket">
                      <button
                        class="btnReturn"
                        @click.prevent="removeFromCart(item)"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="$store.state.cart.length > 0" class="totalWrp">
                <img
                  class="responsive-img"
                  src="@/assets/images/hr.png"
                  alt=""
                />
                <h4>Total price</h4>
                <div class="wrpPriceTotaly">
                  <div class="total">
                    <ul
                      class="totalList"
                      v-for="item in $store.state.cart"
                      :key="item.id"
                    >
                      <li>
                        • {{ item.title }} x{{ item.quantity }} - ${{
                          item.totalPrice
                        }}
                      </li>
                    </ul>
                  </div>
                  <div class="wrpTotal">
                    <div class="totalWrpItem">Total: {{ totalPrice }} ₽</div>
                    <br />
                    <div class="totalWrpItem">To pay: {{ totalPrice }} ₽</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              v-show="$store.state.cartCount && noPayment"
              @click="noPayment = false"
              class="waves-effect lighten btn"
              style="font-weight: 600"
            >
              Pay now
            </button>
            <Payment v-show="!noPayment && $store.state.cartCount" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Payment from "@/components/Payment.vue";

export default {
  name: "Basket",
  components: {
    Menu,
    Footer,
    Payment,
  },
  data() {
    return {
      clothes: "",
      dataItem: "",
      clotheBasket: "",
      noPayment: true,
    };
  },
  props: {
    basket_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
      window.M.toast({
        html: "This item has been deleted from the shopping cart",
      });
      this.$store.commit("saveCart");
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.$store.state.cart) {
        total = parseInt(total) + parseInt(item.totalPrice);
      }
      return parseInt(total);
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.mainWrapper {
  min-height: 600px;
  padding-bottom: 5rem;
}

h4,
h3 {
  color: black;
}
.wrpBasket {
  min-height: 400px;
}

.product_bar_item {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid black;
  margin-top: 2rem;
}

.numberOfGoals {
  color: black;
}

.itemBasket {
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.product_bar_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.basketItem {
  @include for-medium-up {
    margin-left: 1rem;
  }
}

#linkToProducts {
  color: #ffd180;
}

.imgbasket {
  max-height: 300px;
}

.titleOfTypeBasket {
  color: black;
  font-size: 24px;
  margin: 0;
}

.basketItem {
  text-align: left;
}

.salePic {
  width: 70px;
  margin: 0;
}

.btnReturn {
  background-color: #404040;
  padding: 0.4rem;
  color: #ffff;
  border: 0;
  border-radius: 3px;
  margin-right: 1rem;
}

.totalWrp {
  margin-top: 3rem;
}

.totalList {
  text-align: left;
}

.totalWrpItem {
  text-align: left;
  font-size: 26px;
  color: white;
  background: #404040;
  display: inline-block;
  padding: 0.5rem;
  margin-top: 1rem;
}
.wrpPriceTotaly {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding-bottom: 4rem;
}
</style>
