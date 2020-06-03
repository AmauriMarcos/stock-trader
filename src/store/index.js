import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      funds: 10000
   },
   getters: {
     formatNumber: state => {
      return state.funds.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }
   }
})
