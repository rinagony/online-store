<template>
  <div id="openCard">
    <Menu />
    <div class="mainWrapper">    
    <div v-if="!clotheIs" class="wrpLoader">
      <Loader v-if="!clotheIs"/>
    </div>
    
    <div v-else class="wrpClotheItem" v-for="item in newClothes" :key="item.index" v-show="item.id == currentID">
      <h4 class="titleItem" v-if="item.id == currentID">{{item.title}}</h4>
      <div v-if="item.id == currentID" class="wrpDescription">
        <img class="imgItem" v-if="item.id == currentID" :src="require('@/assets/images/' + item.img)" alt="">
        <div class="description">
          <div class="wrpDesc">
            <h4 class="titleOfTypeInfo">Description:</h4>
            <p v-if="item.id == currentID">{{item.description}}</p>
          </div>
          <div class="wrpInWhat">
            <h4 class="titleOfTypeInfo">Composition:</h4>
            <ul>
              <li v-if="item.id == currentID">&#9675; {{item.inWhat.item1}}</li>
              <li v-if="item.id == currentID">&#9675; {{item.inWhat.item2}}</li>
              <li v-if="item.id == currentID">&#9675; {{item.inWhat.item3}}</li>
            </ul>
          </div>
          <div class="wrpDesc">
            <h4 class="titleOfTypeInfo">Price:</h4>
            <p class="saleItem" v-if="item.id == currentID && item.price">Sale -{{item.oferta}}</p>
            <p class="priceItem" v-if="item.id == currentID">{{item.price}}$</p>
          </div>
          <div class="wrpAddBusket">
            <button class="btnReturn" @click="$router.go(-1)">Сome back</button>
            <button 
            @click="addToCart"
             class="red accent-1 btn">Add to busket</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
const baseUrl = "https://api.jsonbin.io/b/5f75b0467243cd7e8247fc41"

export default {
  name: 'OpenCard',
  components: {
    Menu,
    Footer
  },
  data () {
    return {
         newClothes: [],
         clothes: [],
         title: '',
         clotheIs: false,
         currentID: this.$route.params.id,
         product_data: null
    }
  },
  props: {
  },
  async created() {
    try{
      const res = await axios.get(baseUrl);

      this.clothes = res.data;
      var parsedobj = JSON.parse(JSON.stringify(this.clothes))
      this.newClothes = parsedobj.newClothes
      this.clotheIs = true;
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    clothe() {
      return this.$store.getters.clotheById(+this.$route.params.id)
    },
  },
  methods: {
    addToCart() {
      let id = this.currentID
      var resultone = JSON.parse(JSON.stringify(this.newClothes.filter(clothe => clothe.id == id)))
      console.log(resultone)
      this.$store.commit('addToCart', resultone.[0]);
      window.M.toast({html: 'This item has been added to the shopping cart'})
      this.$store.commit('saveCart');
    },
  }
}
</script>

<style scoped lang="scss">
@import './../assets/scss/styles.scss';
.mainWrapper {
  padding-top: 5rem;
}
.wrpLoader{
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

.wrpClotheItem {
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 1rem;
}

.imgItem {
  max-width: 300px;
  border: 1px solid grey;
}

.wrpDescription {
  margin: 3rem 0;
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.description {
  @include for-medium-up {
    margin-left: 3rem;
  }

}

.titleItem {
  color: black;
  font-style: italic;
}

.titleOfTypeInfo {
  margin: 0;
  text-align: left;
  font-weight: 600;
  font-size: 18px;
}

ul {
  list-style-type: none;
  text-align: left;
}

.wrpDesc {
  -webkit-box-align: left;
      -ms-flex-align: left;
          align-items: left;
  p {
    text-align: left;
  }
}

.wrpInWhat {
  margin-top: 2rem;
}

.priceItem {
  color: darkred;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
}

.saleItem {
  margin-top: 0.8rem;
  margin-bottom: 0;
  font-weight: 600;
  color: green;
}

.wrpAddBusket {
  margin-top: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.btnReturn {
  background-color: #404040;
  padding: 0.4rem;
  color: #ffff;
  border: 0;
  border-radius: 3px;
  margin-right: 1rem;
}
</style>
