<template>
  <div class="stocks">

     <div class="bmw box">
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices.bmw}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity" v-model="bmw">
       <button @click="result(bmw)">Buy</button>
     </div>

     <div class="google box">
       <div class="bar">
         <h3>Google <span>(Price: {{getPrices.google}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity" v-model="google">
       <button>Buy</button>
     </div>

     <div class="apple box">
       <div class="bar">
         <h3>Apple <span>(Price: {{getPrices.apple}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity" v-model="apple">
       <button>Buy</button>
     </div>

     <div class="twitter box">
       <div class="bar">
         <h3>Twitter <span>(Price: {{getPrices.twitter}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity" v-model="twitter">
       <button>Buy</button>
     </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
   data(){
     return{
        bmw: 0
     }
   },
   computed: {
     ...mapFields([
       'quantity.bmw',
       'quantity.google',
       'quantity.apple',
       'quantity.twitter'
       
     ]),
     getPrices(){
       return this.$store.getters.getPrices;
     }
   },
   methods: {
      result(bmw){
         
      }
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