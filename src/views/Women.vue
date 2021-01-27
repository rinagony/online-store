<template>
  <div id="women">
    <Menu />
    <div class="blockBar">
      <div class="container">
        <img class="responsive-img" src="@/assets/images/hr.png" alt="" />
        <h4 class="titleMain">Collection 2020 for women</h4>
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
                  v-show="item.sex == 'female'"
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
                  v-show="item.type == 'dress' && item.sex == 'female'"
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
                  v-show="item.type == 'oficelooks' && item.sex == 'female'"
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
                  v-show="item.oferta && item.sex == 'female'"
                  v-bind:productdata="item"
                />
              </div>
            </tab>
          </tabs>
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
  name: "Women",
  components: {
    Menu,
    Footer,
    ClotheItem,
  },
  data() {
    return {
      newClothes: [],
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
  methods: {},
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";
.blockBar {
  @include for-medium-up {
    padding-top: 8rem;
  }
  @include for-desktop-up {
    padding-top: 5rem;
  }
}

.product_bar_item {
  background: #eeeeee;
}

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
</style>
