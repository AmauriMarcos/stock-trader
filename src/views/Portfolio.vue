<template>
  <div class="stocks">

     <div class="bmw box" v-if='getStockQuantity.bmw'>
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices.bmw}} | Qtd: {{getStockQuantity.bmw}}) </span></h3>
       </div>
       <div class="wrap">
          <input type="text" placeholder="Quantity" v-model="quantity.bmw">
          <button @click='sell({current_price: getPrices.bmw, qtd: quantity.bmw, id: 1})'>Sell</button>
       </div>   
       <p>$ {{quantity.bmw * getPrices.bmw}}</p>
     </div>

     <div class="google box" v-if='getStockQuantity.google'>
       <div class="bar">
         <h3>Google <span>(Price: {{getPrices.google}} | Qtd: {{getStockQuantity.google}}) </span></h3>
       </div>
        <div class="wrap">
          <input type="text" placeholder="Quantity" v-model="quantity.google">
          <button  @click='sell({current_price: getPrices.google, qtd: quantity.google, id: 2})'>Sell</button>
       </div>   
     </div>

     <div class="apple box" v-if='getStockQuantity.apple'>
       <div class="bar">
         <h3>Apple <span>(Price: {{getPrices.apple}} | Qtd: {{getStockQuantity.apple}}) </span></h3>
       </div>
        <div class="wrap">
          <input type="text" placeholder="Quantity" v-model="quantity.apple">
          <button  @click='sell({current_price: getPrices.apple, qtd: quantity.apple, id: 3})'>Sell</button>
       </div>   
     </div>

     <div class="twitter box" v-if='getStockQuantity.twitter'>
       <div class="bar">
         <h3>Twitter <span>(Price: {{getPrices.twitter}} | Qtd: {{getStockQuantity.twitter}}) </span></h3>
       </div>
        <div class="wrap">
          <input type="text" placeholder="Quantity" v-model="quantity.twitter">
          <button  @click='sell({current_price: getPrices.twitter, qtd: quantity.twitter, id: 4})'>Sell</button>
       </div>   
     </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapGetters} from 'vuex';

export default {
   computed: {
       ...mapGetters([
       "getPrices",
       "getQuantity",
       "getStockQuantity"
     ]),
     ...mapFields([
      'quantity',
    ]),
   },
   methods: {
      multiply(payload){
          this.$store.commit('multiply', payload);
        },
      sell(payload){
          this.$store.commit('sell', payload);
      }
    }
  }

</script>

<style lang="scss" scoped>
    .wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
   input{
     
     border-radius: 3px;
     border: 1px solid #ccc;
     padding: 5px;
     margin: 1rem;
     outline: none;
   }

  button{
     padding: .3rem 1rem;
     background-color: rgb(240, 154, 154);
     color: #f4f4f4;
     border-radius: 3px;
     border: none;
     margin: .5rem 2rem;
  }

  span{
    font-size: .8rem;
  }

  .stocks{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;   
  }

  .box{
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .bar{
    padding: 7px;
    background-color: #f4f4f4;
  }
</style>