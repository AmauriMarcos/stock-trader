import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import { getField, updateField } from 'vuex-map-fields';
=======
import { getField, updateField } from "vuex-map-fields";
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      funds: 10000,
      prices: 
<<<<<<< HEAD
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
=======
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
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
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
<<<<<<< HEAD
     updateField,
     result(state){
        console.log(state.quantity.bmw);
     } 
   }
=======
    updateField,
     GET_QUANTITY(state, payload){
        state.quantity = payload
     },
     multiply(state, payload){
        state.funds = state.funds - (payload.price * payload.qtd);
     }     
   },
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
})
