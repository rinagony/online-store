<template>
  <div id="Home">
    <Menu />
    <div class="mainWrapper">
      <div class="wrpImageBetween">
        <img class="responsive-img hrMain" src="@/assets/images/hr.png" alt="" />
      </div>

      <div class="wrpCarousel">
        <button class="btnCarousel" v-on:click="nextSlide">&#8667;</button>
        <div class="slider js-slider">
          <div
            class="slider__body"
            v-bind:style="{ left: sliderOffsetLeft + 'px' }"
          >
            <div
              class="sliderMain slider__slide js-slide"
              v-for="dataCar in carouselData"
              :key="dataCar.index"
            >
              <img
                class="imgCarousel responsive-img"
                :src="require('@/assets/images/' + dataCar.image)"
                alt=""
              />
              <div class="wrpSlider_content">
                <h5>{{ dataCar.title }}</h5>
                <p class="descriptionCarousel">{{ dataCar.description }}</p>
                <hr />
                <router-link
                  :to="dataCar.link"
                  class="clotheOfferBtn waves-effect lighten ofertabtn btn"
                  >See all</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!clotheIs" class="wrpLoader">
        <Loader v-if="!clotheIs" />
      </div>
      <div v-else class="blockBar">
        <div class="container">
          <img class="responsive-img hrMain" src="@/assets/images/hr.png" alt="" />
          <h3 class="titlesOfBlocks">
            Discaunt on clothes for women<span
              ><img class="attencionImg" src="@/assets/images/att.png" alt=""
            /></span>
          </h3>
          <div class="offersMain wrpClotheBar">
            <ClotheItem
              class="product_bar_item"
              v-for="item in newClothes"
              :key="item.index"
              v-show="item.oferta && item.sex == 'female'"
              v-bind:productdata="item"
            />
          </div>
          <router-link to="/women" class="clotheOfferBtn waves-effect lighten ofertabtn btn"
            >See more..</router-link
          >
        </div>
      </div>
      <div class="wrpChoose">
        <h4 id="titleChoose">Why you choose our store</h4>
        <div class="wrpPreimItem">
          <p id="descriptionChoose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            atque dignissimos nemo at rem corporis quod illum, rerum quae
            quaerat laborum debitis aliquid voluptates, iste labore, sapiente
            amet fugit commodi?
          </p>
          <div class="preims">
            <div
              class="preimitemChoose"
              v-for="item in preimOur"
              :key="item.index"
            >
              <img
                class="responsive-img"
                :src="require('@/assets/images/' + item.img)"
                alt=""
              />
              <span class="numberOf">{{ item.title }}</span>
              <p>{{ item.number }}</p>
            </div>
          </div>
        </div>
      </div>
      <Loader v-if="!clotheIs" />
      <div v-else class="blockBar">
        <div class="container">
          <img class="responsive-img hrMain" src="@/assets/images/hr.png" alt="" />
          <h3 class="titlesOfBlocks">
            Discaunt on clothes for man<span
              ><img class="attencionImg" src="@/assets/images/att.png" alt=""
            /></span>
          </h3>
          <div class="offersMain wrpClotheBar">
            <ClotheItem
              class="product_bar_item"
              v-for="item in newClothes"
              :key="item.index"
              v-show="item.oferta && item.sex == 'male'"
              v-bind:productdata="item"
            />
          </div>
          <router-link to="/man" class="waves-effect lighten btn ofertabtn"
            >See more..</router-link
          >
        </div>
      </div>
      <div class="formWrp">
        <img class="responsive-img hrMain" src="@/assets/images/hr.png" alt="" />
        <h4 class="titlesOfBlocks">Complete form and ask questions</h4>
        <FormBlock />
      </div>
      <div class="container">
        <img class="responsive-img hrMain" src="@/assets/images/hr.png" alt="" />
        <div class="preimWrp">
          <div class="preimItem">
            <img src="@/assets/images/preim1.png" alt="" />
            <div class="preimContent">
              <p>Free shipping</p>
              <p>On all orders just 49$</p>
            </div>
          </div>
          <div class="preimItem">
            <img src="@/assets/images/preim2.png" alt="" />
            <div class="preimContent">
              <p>15 days returns</p>
              <p>On all orders just 49$</p>
            </div>
          </div>
          <div class="preimItem">
            <img src="@/assets/images/preim3.png" alt="" />
            <div class="preimContent">
              <p>Secure checkout</p>
              <p>On all orders just 49$</p>
            </div>
          </div>
          <div class="preimItem">
            <img src="@/assets/images/preim4.png" alt="" />
            <div class="preimContent">
              <p>100% free warinly</p>
              <p>On all orders just 49$</p>
            </div>
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
import FormBlock from "@/components/FormBlock.vue";
import ClotheItem from "@/components/ClotheItem.vue";
import axios from "axios";
import { bus } from "@/main.js";

const baseUrl = "https://api.jsonbin.io/b/5f75b0467243cd7e8247fc41";

export default {
  name: "Home",
  components: {
    Menu,
    Footer,
    FormBlock,
    ClotheItem,
  },
  data() {
    return {
      carouselData: [
        {
          image: "1.jpg",
          title: "New collection for women",
          description:
            "New collection from our factories! Kumque reprehenderit eos, officia, totam delectus repellat. Similique error aperiam dolores soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur, placeat magnam at voluptatum culpa quae distinctio saepe.",
          link: "/women",
        },
        {
          image: "2.jpg",
          title: "New collection for men",
          description:
            "New collection from our factories! Kumque reprehenderit eos, officia, totam delectus repellat. Similique error aperiam dolores soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur, placeat magnam at voluptatum culpa quae distinctio saepe.",
          link: "/man",
        },
      ],
      sliderAllCount: 0,
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      newClothes: [],
      currentid: "",
      clothe: [],
      linktocard: "/opencard/",
      clotheMan: [],
      loading: true,
      clotheIs: false,
      preimOur: [
        {
          img: "preimstore.png",
          title: "290",
          number: "Our stores in the world",
        },
        {
          img: "preimstore2.png",
          title: "30",
          number: "Our stores in the world",
        },
        {
          img: "preimstore3.png",
          title: "123",
          number: "Our stores in the world",
        },
        {
          img: "preimstore4.png",
          title: "102",
          number: "Our stores in the world",
        },
      ],
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
    initSlider: function () {
      let sliderBody = this.$el.querySelector(".js-slider");
      let sliderSlidies = sliderBody.querySelectorAll(".js-slide");
      this.sliderOffsetStep = sliderBody.clientWidth;
      this.sliderAllCount = sliderSlidies.length;
    },
    openSlide: function (id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },
    nextSlide: function () {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      } else {
        this.sliderActive = 0;
      }
    },
    prevSlide: function () {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    },
    currencyid(id) {
      this.currentid = id;
      console.log("currencyid");
      bus.$emit("currencyid", this.currentid);
    },
  },
  mounted() {
    this.initSlider();
    window.addEventListener("resize", () => {
      this.initSlider();
      this.openSlide(this.sliderActive);
    });
  },
  beforeMount() {
    setInterval(() => {
      this.nextSlide();
    }, 2500);
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError);
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

#home {
  overflow-x: hidden;
}

.imgCarousel {
  overflow: hidden;
  border-radius: 5px;
  border-radius: 5px;
}
hr {
  width: 50%;
}

.descriptionCarousel {
  text-align: center;
  padding: 0 2rem;
  @include for-desktop-up {
    margin: 0 15rem;
  }
}

.wrpImageBetween {
  margin-top: 15px;
}
.firstSlide {
  margin: 0 1rem;
}

.wrpCarousel {
  position: relative;
}

.carousel-item {
  width: 100%;
  max-height: 450px;
}

.carousel .carousel-item {
  height: auto;
}

.hrMain {
  max-width: 600px;
}

$slider-height: 100%;
$slide-width: 100%;

.slider {
  width: 100%;
  height: $slider-height;
  position: relative;
  overflow: hidden;

  &__body {
    min-width: auto;
    height: $slider-height;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &__slide {
    min-width: $slide-width;
    height: $slider-height;
    background-size: cover;
    background-position: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 100%;
    flex: 1 100%;
  }
}

.attencionImg {
  width: 100px;
  position: absolute;
  top: -15px;
  -webkit-transform: rotate(26deg);
  -ms-transform: rotate(26deg);
  transform: rotate(26deg);
}

#descriptionChoose {
  text-align: center;
  padding: 1rem 2rem;
  @include for-desktop-up {
    margin: 1rem 15rem;
  }
}

.offersMain {
  margin-top: 3rem;
}

.numberOf {
  color: #cf9700;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

.btnCarousel {
  border: none;
  outline: none;
  background: none;
  margin-bottom: 1rem;
  font-size: 30px;
  color: #000;
}

.titlesOfBlocks {
  margin-top: 3rem;
  color: rgb(44, 44, 44);
  font-size: 40px;
}

.blockBar {
  padding: 2rem 0;
}

.product_bar_item {
  background: #eeeeee;
}
.product_bar_item {
  border-radius: 10px;
}

.formWrp {
  margin: 3rem 0;
}

.preimWrp {
  margin: 4rem 0;
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
}

.preims {
  display: -ms-grid;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  -ms-grid-rows: 220px;
  grid-template-rows: repeat(1, 220px);
  justify-items: center;
  margin-top: 3rem;
}

.wrpSlider_content {
  position: relative;
  @include for-desktop-up {
    margin-top: -20%;
  }
  padding: 20px 0;
  color: #fff;
  background: rgba($color: #000000, $alpha: 0.5);
}

.preimItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0.5rem;
  p {
    margin: 0;
    text-align: left;
  }
  img {
    margin-right: 1rem;
  }
}

.preimitemChoose {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  p {
    margin: 0;
    font-weight: 600;
  }
}

.wrpChoose {
  background: #fff;
  color: #000;
  padding: 2rem 0;
}

#titleChoose {
  margin-top: 0;
}

.clotheOfferBtn {
    margin-top: 2rem;
}

.preimitemChoose {
  width: 140px;
}
</style>
