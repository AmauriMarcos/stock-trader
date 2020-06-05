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
      },
      stock_quantity: 
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
     },
     getStockQuantity: state => {
       return state.stock_quantity
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
     multiply(state, payload){
        state.funds = state.funds - (payload.price * payload.qtd);
<<<<<<< HEAD
     }     
   },
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
        
        if(payload.stock_qtd === 'bmw'){
          state.stock_quantity.bmw = Number(state.stock_quantity.bmw) + Number(payload.qtd)
          state.quantity.bmw = ''
        } else if(payload.stock_qtd === 'google'){
          state.stock_quantity.google = Number(state.stock_quantity.google) + Number(payload.qtd)
          state.quantity.google = ''
        } else if(payload.stock_qtd === 'apple'){
          state.stock_quantity.apple = Number(state.stock_quantity.apple) + Number(payload.qtd)
          state.quantity.apple = ''
        }else {
          state.stock_quantity.twitter = Number(state.stock_quantity.twitter) + Number(payload.qtd)
          state.quantity.twitter = ''
        }

     },
     
     changePrices(state){
        const {bmw, google, apple, twitter} = state.prices;
        let bmw_variation = Math.floor(Math.random() * ((bmw /100) * 40));
        let google_variation = Math.floor(Math.random() * ((google /100) * 40));
        let apple_variation = Math.floor(Math.random() * ((apple /100) * 40));
        let twitter_variation = Math.floor(Math.random() * ((twitter /100) * 40));

        let coin = Math.random() < 0.6;

        if(coin){
          state.prices.bmw = state.prices.bmw + bmw_variation;
          state.prices.google = state.prices.google + google_variation;
          state.prices.apple = state.prices.apple + apple_variation;
          state.prices.twitter = state.prices.twitter + twitter_variation;
        }else{
          state.prices.bmw = state.prices.bmw - bmw_variation;
          state.prices.google = state.prices.google - google_variation;
          state.prices.apple = state.prices.apple - apple_variation;
          state.prices.twitter = state.prices.twitter - twitter_variation;
        }
          
     },
     sell(state, payload){
        state.funds = state.funds + (Number(payload.current_price) * Number(payload.qtd));
        if(payload.id === 1){
          state.stock_quantity.bmw = state.stock_quantity.bmw - payload.qtd
          state.quantity.bmw = ''
        } else if( payload.id === 2){
          state.stock_quantity.google = state.stock_quantity.google - payload.qtd
          state.quantity.google = ''
        } else if( payload.id === 3){
          state.stock_quantity.apple = state.stock_quantity.apple - payload.qtd
          state.quantity.apple = ''
        } else{
          state.stock_quantity.twitter = state.stock_quantity.twitter - payload.qtd
          state.quantity.twitter = ''
        }
     }
   }
  
>>>>>>> solo
})
