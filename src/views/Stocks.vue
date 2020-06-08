<template>
  <div class="stocks">

     <div class="bmw box">
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices.bmw}})</span></h3>
       </div>

       <div class="itens">
          <input type="text" placeholder="Quantity" v-model="quantity.bmw">
          <p>$ {{quantity.bmw * getPrices.bmw}}</p>
          <button @click="buy({price: getPrices.bmw, qtd: quantity.bmw, stock_qtd: 'bmw'})">Buy</button>
       </div>
       
     </div>

     <div class="google box">
       <div class="bar">
         <h3>Google <span>(Price: {{getPrices.google}})</span></h3>
       </div>

       <div class="itens">
          <input type="text" placeholder="Quantity" v-model="quantity.google">
          <p>$ {{quantity.google * getPrices.google}}</p>
          <button @click="buy({price: getPrices.google, qtd: quantity.google, stock_qtd: 'google'})" >Buy</button>
       </div>
       
     </div>

     <div class="apple box">
       <div class="bar">
         <h3>Apple <span>(Price: {{getPrices.apple}})</span></h3>
       </div>
       <div class="itens">
          <input type="text" placeholder="Quantity" v-model="quantity.apple">
          <p>$ {{quantity.apple * getPrices.apple}}</p>
          <button @click="buy({price: getPrices.apple, qtd: quantity.apple, stock_qtd: 'apple'})"  >Buy</button>
       </div>
       
     </div>

     <div class="twitter box">
       <div class="bar">
         <h3>Twitter <span>(Price: {{getPrices.twitter}})</span></h3>
       </div>
       <div class="itens">
          <input type="text" placeholder="Quantity" v-model="quantity.twitter">
          <p>$ {{quantity.twitter * getPrices.twitter}}</p>
          <button @click="buy({price: getPrices.twitter, qtd: quantity.twitter, stock_qtd: 'twitter'})" >Buy</button>
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
      buy(payload){
          this.$store.commit('buy', payload);
          
        }
      }
   }

</script>

<style lang="scss">
.itens{
  display: flex;
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
     background-color: rgb(117, 117, 117);
     color: #f4f4f4;
     border-radius: 3px;
     border: none;
    
  }

  .itens button{
    margin: 0 2rem;
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