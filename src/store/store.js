import axios from "axios"
import Vuex from "vuex"
import Vue from 'vue'
import Auth from './auth'
import info from './info'
const baseUrl = "http://localhost:3000/newClothes"
let cart = window.localStorage.getItem('cart')
let cartCount = window.localStorage.getItem('cartCount')

Vue.use(Vuex)

export default new Vuex.Store({
    data () {
        return {
          newClothes: []
        }
    },
    async created() {
        try{
          const res = await axios.get(baseUrl);
    
          this.state.clothe = res.data;
        } catch (e) {
          console.error(e);
        }
    },
    state: {
        clothe: [],
        error: null,
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,
    },
    getters: {
        clothe: s => s.clothe,
        clotheById: s => id => s.clothe.find(c => c.id === id),
        error: s => s.error,
    },
    modules: {
      Auth, info
    },
    mutations: {
      setError(state, error) {
        state.error = error
      },
      clearError(state) {
        state.error = null
      },
      SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
      },
      addToCart(state, item) {
        let found = state.cart.find(product => product.id == item.id);

        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
        } else {
            state.cart.push(item);

            Vue.set(item, 'quantity', 1);
            Vue.set(item, 'totalPrice', item.price);
        }

        state.cartCount++;
      },
      removeFromCart(state, item) {
        let index = state.cart.indexOf(item);
    
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount -= product.quantity;
    
            state.cart.splice(index, 1);
        }
      },
      saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        window.localStorage.setItem('cartCount', state.cartCount);
      }
    },
    actions: {
    }
})