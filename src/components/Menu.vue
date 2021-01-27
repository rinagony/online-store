<template>
  <div id="menu">
    <div class="menuWrp">
      <div class="logoWrp">
        <router-link to="/">
          <img src="./../assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <div class="menuItem">
        <ul>
          <li v-for="item in linksItems" :key="item.index">
            <router-link class="menuLink" :to="item.path">{{
              item.title
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="wrpLogIn" v-if="!name.name">
        <router-link to="/login" class="waves-effect lighten btn ofertabtn"
          >Log in</router-link
        >
      </div>
      <div class="wrpProfile">
        <a
          class="dropdown-trigger logProf"
          ref="dropdown"
          href="#"
          data-target="dropdown1"
          >{{ name.name }} {{ name.lastName }}</a
        >
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <router-link to="/profile" class="itemProfile">Profile</router-link>
          </li>
          <li>
            <a
              id="loginBtn"
              href="#!"
              @click.prevent="logout"
              class="itemProfile"
              >Log out</a
            >
          </li>
          <li class="divider" tabindex="-1"></li>
        </ul>
      </div>
      <div class="wrpBasket">
        <router-link to="/basket"
          ><img src="./../assets/images/basket.png" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      someAddress: "./home",
      linksItems: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Women",
          path: "/women",
        },
        {
          title: "Man",
          path: "/man",
        },
        {
          title: "Lookbook",
          path: "*",
        },
        {
          title: "Contact",
          path: "/contact",
        },
      ],
      dropdown: null,
      isExistInfo: false,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
  },
  async mounted() {
    window.M.Dropdown.init(this.$refs.dropdown, {
      // инициализация дропдаун
      constrainWidth: false, // убрать ширину
    });
    if (this.$store.getters.info) {
      await this.$store.dispatch("fetchInfo");
      this.isExistInfo = true;
    } else {
      this.isExistInfo = false;
    }
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
#menu {
  width: 100%;
  @include for-medium-up {
    position: fixed;
  }
  z-index: 1000;
}

.menuWrp {
  padding: 0.1rem 2.5rem;
  background: linear-gradient(to right, #c28a10 0, #ecc46d 100%);
  color: #fff;
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

.logoWrp {
  img {
    max-width: 150px;
  }
}

.menuItem {
  ul {
    li {
      list-style-type: none;
      display: inline-block;
      margin-top: 0.5rem;
      margin-right: 1rem;
      @include for-medium-up {
        margin-right: 3rem;
      }
    }
  }
}

.wrpBasket {
  cursor: pointer;
  img {
    max-width: 40px;
    margin-top: 1rem;
  }
}

.menuLink {
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  font-weight: 500;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;

  &:hover {
    color: whitesmoke;
  }
}

.logProf {
  font-weight: 600;
  font-size: 21px;
  color: #242323;
  border-bottom: 1px solid#242323;
  border-top: 1px solid #404040;
}

.itemProfile {
  font-weight: 600;
  font-size: 21px;
  color: #404040;
}

.wrpProfile {
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


