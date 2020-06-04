import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      funds: 10000,
      prices: 
      { 
        bmw: 110, 
        google: 200, 
        apple: 250, 
        twitter: 8 
      },
      quantity: 
      {
        bmw: 0, 
        google: 0, 
        apple: 0, 
        twitter: 0
      }
   },
   getters: {
     getField,
     formatNumber: state => {
       return state.funds.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     },
     getPrices: state => {
       return state.prices
     },
     getQuantity: state => {
       return state.quantity
     }
   },
   mutations: {
    updateField,
     GET_QUANTITY(state, payload){
        state.quantity = payload
     },
     multiply(state, payload){
        state.funds = state.funds - (payload.price * payload.qtd);
     }     
   },
})
