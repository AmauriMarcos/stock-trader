import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      funds: 10000,
      prices: [
        {
          bmw: 110
        },
        {
          google: 200
        },
        {
          apple: 250
        },
        {
          twitter: 8
        }
      ]
   },
   getters: {
     formatNumber: state => {
       return state.funds.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     },
     getPrices: state => {
       return state.prices
     }
   }
})
