<template>
  <div class="stocks">
     <div class="port_empty" v-if='!getStockQuantity.bmw && !getStockQuantity.google && !getStockQuantity.apple && !getStockQuantity.twitter'>
        <h2>Your Portfolio is Empty.</h2>
        <img src="https://i2.wp.com/www.osmelhoresinvestimentos.com.br/wp-content/uploads/2018/07/ESTRAT%C3%89GIA-DE-TOURO-E-URSO-CONHE%C3%87A-ESSA-T%C3%81TICA-PARA-GANHAR-EM-OP%C3%87%C3%95ES-Os-Melhores-Investimentos-Op%C3%A7%C3%B5es-Touro-e-Urso.png?resize=900%2C450&ssl=1" alt="bull & bear">
     </div>
     <div class="bmw box" v-if='getStockQuantity.bmw'>
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices.bmw}} | Qtd: {{getStockQuantity.bmw}}) </span></h3>
       </div>
       <div class="wrap">
          <input type="text" placeholder="Quantity" v-model="quantity.bmw">
          <button @click='sell({current_price: getPrices.bmw, qtd: quantity.bmw, id: 1})'>Sell</button>
       </div>   
       <!-- <p>$ {{quantity.bmw * getPrices.bmw}}</p> -->
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

  img{
    width: 100%;
    height: 500px;
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

  h2{
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    font-size: 1.6rem;
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

  .port_empty{
     transform: translateY(-3rem);
  }
</style>