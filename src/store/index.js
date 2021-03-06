import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(FlashMessage);

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      allowed: true,
      funds: 10000,
      prices: { bmw: 110, google: 200, apple: 250, twitter: 8 },
      quantity: {bmw: 0, google: 0, apple: 0, twitter: 0},
      stock_quantity: {bmw: 0, google: 0, apple: 0, twitter: 0},
      save_price:{bmw: 0,google: 0,apple: 0,twitter: 0},
      save_quantity:{bmw: 0,google: 0,apple: 0,twitter: 0}
   },
   getters: {
     getField,
     formatNumber: state => {
       return state.funds.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     },
     getPrices: state => {
       return state.prices
     },
     getAllowed: state => {
       return state.allowed
     },
     getQuantity: state => {
       return state.quantity
     },
     getStockQuantity: state => {
       return state.stock_quantity
     },
     getSavePrice: state => {
       return state.save_price
     },
     getSaveQuantity: state => {
       return state.save_quantity
     }
   },
   mutations: {
    updateField,
     buy(state, payload){

        if(payload.qtd * payload.price > state.funds){
            state.allowed = false
        }else{
            state.allowed = true
            state.funds = state.funds - (payload.price * payload.qtd);

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
        }
     },
     
     changePrices(state){
        const {bmw, google, apple, twitter} = state.prices;
        
        let bmw_variation = stocksVariation(bmw);
        let google_variation = stocksVariation(google);
        let apple_variation = stocksVariation(apple);
        let twitter_variation = stocksVariation(twitter);

        let coin = Math.random() < 0.5;

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
     },
     saveData(state, payload){
  
      state.save_price.bmw = payload.prices.bmw
      state.save_quantity.bmw = payload.quantities.bmw;

      state.save_price.google = payload.prices.google
      state.save_quantity.google = payload.quantities.google;

      state.save_price.apple = payload.prices.apple
      state.save_quantity.apple = payload.quantities.apple;

      state.save_price.twitter = payload.prices.twitter
      state.save_quantity.twitter = payload.quantities.twitter;   

    },
    loadData(state){
      state.prices.bmw =  state.save_price.bmw;
      state.stock_quantity.bmw = state.save_quantity.bmw;
   
      state.prices.google = state.save_price.google;
      state.stock_quantity.google =  state.save_quantity.google;
      
      state.prices.apple = state.save_price.apple;
      state.quantity.apple = state.save_quantity.apple;
      state.stock_quantity.apple = ''

      state.prices.twitter = state.save_price.twitter;
      state.stock_quantity.twitter = state.save_quantity.twitter;
      
    }
  }
});


function stocksVariation(stock){
  let variation = Math.floor(Math.random() * ((stock /100) * 30));
  return variation;
}