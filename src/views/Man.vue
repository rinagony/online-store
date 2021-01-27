<template>
  <div id="man">
    <Menu />
    <div class="mainWrapper">
      <div class="blockBar">
        <div class="container">
          <div class="wrpImageBetween">
            <img
              class="responsive-img hrMain"
              src="@/assets/images/hr.png"
              alt=""
            />
          </div>
          <h4 class="titleMain">Collection 2020 for man</h4>
          <div v-if="!clotheIs" class="wrpLoader">
            <Loader v-if="!clotheIs" />
          </div>
          <div v-else class="tabsWrp">
            <tabs :options="{ useUrlFragment: false }">
              <tab name="All clothes &#9658;" class="tabb">
                <div class="offersMain wrpClotheBar">
                  <ClotheItem
                    class="product_bar_item"
                    v-for="item in newClothes"
                    :key="item.index"
                    v-show="item.sex == 'male'"
                    v-bind:productdata="item"
                  />
                </div>
              </tab>
              <tab name="New collection &#9658;">
                <div class="offersMain wrpClotheBar">
                  <ClotheItem
                    class="product_bar_item"
                    v-for="item in newClothes"
                    :key="item.index"
                    v-show="item.type == 'dress' && item.sex == 'male'"
                    v-bind:productdata="item"
                  />
                </div>
              </tab>
              <tab id="oh-hi-mark" name="Ofice looks &#9658;">
                <div class="offersMain wrpClotheBar">
                  <ClotheItem
                    class="product_bar_item"
                    v-for="item in newClothes"
                    :key="item.index"
                    v-show="item.type == 'oficelooks' && item.sex == 'male'"
                    v-bind:productdata="item"
                  />
                </div>
              </tab>
              <tab name="Discaunts &#9658;">
                <div class="offersMain wrpClotheBar">
                  <ClotheItem
                    class="product_bar_item"
                    v-for="item in newClothes"
                    :key="item.index"
                    v-show="item.oferta && item.sex == 'male'"
                    v-bind:productdata="item"
                  />
                </div>
              </tab>
            </tabs>
          </div>
          <div class="wrpImageBetween" id="bottomHr">
            <img
              class="responsive-img hrMain"
              src="@/assets/images/hr.png"
              alt=""
            />
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
import axios from "axios";
import ClotheItem from "@/components/ClotheItem.vue";

const baseUrl = "https://api.jsonbin.io/b/5f75b0467243cd7e8247fc41";

export default {
  name: "Man",
  components: {
    Menu,
    Footer,
    ClotheItem,
  },
  data() {
    return {
      newClothes: [],
      cardopen: "/opencard/",
      idcurrency: "",
      clotheIs: false,
      clothe: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(baseUrl);

      this.clothe = res.data;
      var parsedobj = JSON.parse(JSON.stringify(this.clothe));
      this.newClothes = parsedobj.newClothes;
      this.clotheIs = true;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    currentid() {
      console.log(this.idcurrency);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.wrpLoader {
  min-height: 450px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#bottomHr {
  margin-top: 2rem;
}

.product_bar_item {
  background: #eeeeee;
}

.tabs-component-tabs {
  display: flex;
  justify-content: center;
}
.wrpImageBetween {
  img {
    max-width: 500px;
  }
}
</style>
