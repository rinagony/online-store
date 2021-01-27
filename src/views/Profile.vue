<template>
  <div id="profile">
    <Menu />
    <div class="mainWrapper">
      <div class="container">
        <div class="wrpProfile">
          <img class="responsive-img" src="@/assets/images/hr.png" alt="" />
          <h5 class="titleMain">My profile</h5>
          <div class="wrpInfo">
            <p>
              First Name: <span>{{ name.name }}</span>
            </p>
            <p>
              Last Name: <span>{{ name.lastName }}</span>
            </p>
            <p>
              Payment method:
              <span v-if="name.methodPay">{{ name.methodPay }}</span>
              <span v-else-if="!name.methodPay">
                <a href="#" @click="noPayment = false" class="addOption"
                  >Add method</a
                >
              </span>
            </p>
          </div>
          <div class="wrpPayment" v-show="!noPayment">
            <Payment />
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
  name: "Profile",
  components: {
    Menu,
    Footer,
    Payment,
  },
  data() {
    return {
      noPayment: true,
    };
  },
  computed: {
    name() {
      return this.$store.getters.info;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./../assets/scss/styles.scss";

.wrpProfile {
  min-height: 550px;
}

.mainWrapper {
  padding-top: 5rem;
}

.wrpProfile {
  min-height: 530px;
}

.wrpInfo {
  text-align: left;
}

.addOption {
  background: darkcyan;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.wrpPayment {
  padding: 4rem 0;
}

span.price {
  float: right;
  color: grey;
}

.wrpBilAddressPayment {
  @include for-medium-up {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    .addressBil {
      width: 40%;
    }
    .payment {
      width: 40%;
    }
  }
}

#payCards {
  width: 200px;
}

.wrpInfo {
  p {
    font-size: 19px;
    font-weight: 500;
    font-weight: 600;
    span {
      font-weight: 500;
    }
  }
}

.titleMain {
  font-weight: 500;
  font-size: 27px;
}
</style>
