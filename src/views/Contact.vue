<template>
  <div id="contact">
    <Menu />
    <div class="mainWrapper">
      <img class="responsive-img" src="@/assets/images/hr.png" alt="" />
      <div class="wrpContact">
        <div class="container">
          <div class="wrpContacts">
            <h3>Our stores:</h3>
            <div class="wrpSroresLocate">
              <div class="itemLocate">
                <h5>Store Outlet</h5>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/location.png')" alt="" />
                  <p>Carrer de Girona, 37</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/time.png')" alt="" />
                  <p>from 9am to 6pm</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/phone.png')" alt="" />
                  <a href="tel:+345677898">+34 567 78 91</a>
                </div>
              </div>
              <div class="itemLocate">
                <h5>Store Punto Fa, S.L.</h5>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/location.png')" alt="" />
                  <p>Palau-solità i Plegamans</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/time.png')" alt="" />
                  <p>from 9am to 6pm</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/phone.png')" alt="" />
                  <a href="tel:+345677898">+34 567 78 90</a>
                </div>
              </div>
              <div class="itemLocate">
                <h5>Diagonal Mar</h5>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/location.png')" alt="" />
                  <p>Avinguda Diagonal, 208</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/time.png')" alt="" />
                  <p>from 9am to 6pm</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/phone.png')" alt="" />
                  <a href="tel:+345677898">+34 567 78 38</a>
                </div>
              </div>
              <div class="itemLocate">
                <h5>Store Mar</h5>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/location.png')" alt="" />
                  <p>Near Casa Batlló</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/time.png')" alt="" />
                  <p>from 9am to 6pm</p>
                </div>
                <div class="wrpContactItem">
                  <img :src="require('@/assets/images/phone.png')" alt="" />
                  <a href="tel:+345679898">+34 567 78 68</a>
                </div>
              </div>
            </div>
            <div class="map">
              <Map />
            </div>
            <div class="form">
              <h5>Contact us</h5>
              <FormBlock />
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
import Map from "@/components/Map.vue";

export default {
  name: "Contact",
  components: {
    Menu,
    Footer,
    FormBlock,
    Map,
  },
};
</script>

<style scoped lang="scss">
h5 {
  font-weight: 600;
  color: #f8b333;
}

.map {
  width: 100%;
  margin: 0 auto;
}
.wrpSroresLocate {
  display: -ms-grid;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  -ms-grid-rows: 200px;
  grid-template-rows: repeat(1, 200px);
  justify-items: center;
  margin-bottom: 3rem;
}

.form {
  margin: 3rem 0;
}

.itemLocate {
  text-align: left;
  p {
    margin: 0.5rem 0;
    font-weight: 500;
  }
}

.wrpContactItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 20px;
    margin-right: 0.3rem;
  }
}

#contact {
  color: black;
}
</style>
