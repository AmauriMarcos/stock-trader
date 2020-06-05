<template>
  <div class="stocks">

     <div class="bmw box">
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices.bmw}})</span></h3>
       </div>
<<<<<<< HEAD
       <input type="text" placeholder="Quantity" v-model="bmw">
       <button @click="result(bmw)">Buy</button>
=======
       <input type="text" placeholder="Quantity" v-model="quantity.bmw">
<<<<<<< HEAD
       <button @click="multiply({price: getPrices.bmw, qtd: quantity.bmw})">Buy</button>
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
       <button @click="multiply({price: getPrices.bmw, qtd: quantity.bmw, stock_qtd: 'bmw'})">Buy</button>
>>>>>>> solo
     </div>

     <div class="google box">
       <div class="bar">
         <h3>Google <span>(Price: {{getPrices.google}})</span></h3>
       </div>
<<<<<<< HEAD
       <input type="text" placeholder="Quantity" v-model="google">
       <button>Buy</button>
=======
       <input type="text" placeholder="Quantity" v-model="quantity.google">
<<<<<<< HEAD
       <button @click="multiply({price: getPrices.google, qtd: quantity.google})" >Buy</button>
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
       <button @click="multiply({price: getPrices.google, qtd: quantity.google, stock_qtd: 'google'})" >Buy</button>
>>>>>>> solo
     </div>

     <div class="apple box">
       <div class="bar">
         <h3>Apple <span>(Price: {{getPrices.apple}})</span></h3>
       </div>
<<<<<<< HEAD
       <input type="text" placeholder="Quantity" v-model="apple">
       <button>Buy</button>
=======
       <input type="text" placeholder="Quantity" v-model="quantity.apple">
<<<<<<< HEAD
       <button @click="multiply({price: getPrices.apple, qtd: quantity.apple})"  >Buy</button>
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
       <button @click="multiply({price: getPrices.apple, qtd: quantity.apple, stock_qtd: 'apple'})"  >Buy</button>
>>>>>>> solo
     </div>

     <div class="twitter box">
       <div class="bar">
         <h3>Twitter <span>(Price: {{getPrices.twitter}})</span></h3>
       </div>
<<<<<<< HEAD
       <input type="text" placeholder="Quantity" v-model="twitter">
       <button>Buy</button>
=======
       <input type="text" placeholder="Quantity" v-model="quantity.twitter">
<<<<<<< HEAD
       <button @click="multiply({price: getPrices.twitter, qtd: quantity.twitter})" >Buy</button>
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
       <button @click="multiply({price: getPrices.twitter, qtd: quantity.twitter, stock_qtd: 'twitter'})" >Buy</button>
>>>>>>> solo
     </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
import { mapGetters} from 'vuex';

>>>>>>> solo
export default {
   data(){
     return{
        bmw: 0
     }
   },
   computed: {
<<<<<<< HEAD
     ...mapFields([
       'quantity.bmw',
       'quantity.google',
       'quantity.apple',
       'quantity.twitter'
       
     ]),
     getPrices(){
       return this.$store.getters.getPrices;
<<<<<<< HEAD
     }
   },
   methods: {
      result(bmw){
         
=======
     },
      getQuantity(){
       return this.$store.getters.getQuantity;
    },
=======
     ...mapGetters([
       "getPrices",
       "getQuantity",
       "getStockQuantity"
     ]),
>>>>>>> solo
     ...mapFields([
      'quantity',
    ]),
   },
   methods: {
      multiply(payload){
          this.$store.commit('multiply', payload);
        }
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
      }
   }

</script>

<style lang="scss">
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