<template>
  <div>
     <div class="container">
        <div class="header">
            <div class="header__start">
               <ul>
                 <router-link tag='a' to='/' active-class="active" exact="/">Stock Trader</router-link>
                 <router-link tag='a' to='/portfolio' active-class="active">Portfolio</router-link>
                 <router-link tag='a' to='/stocks' active-class="active">Stocks</router-link>            
               </ul>
            </div>
        
            <div class="header__end">
              <ul>
                 <li>
                   <button class="btn-day" @click="changePrices">End Day</button>
                 </li>
                 <li>
                   <button class="btn-day" @click="saveData({prices: getPrices, quantities: getStockQuantity})">Save</button>
                 </li>
                 <li>
                   <button class="btn-day" @click="loadData">Load</button>
                 </li>
                 <li>Funds: ${{ funds }}</li>
              </ul>
            </div>
        </div> 

        <div class="saved">
          <FlashMessage :position="'left-top'"></FlashMessage>
        </div>  
        
      
        <div class="content">
          <router-view></router-view>
        </div>
        
     </div>
        
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
       funds(){
       return this.$store.getters.formatNumber;
    },
    ...mapGetters([
       'getSavePrice',
       'getSaveQuantity',
       'getPrices',
       'getStockQuantity'
    ])
  },
  methods:{
    changePrices(){
       this.$store.commit('changePrices');
    },
    saveData(payload){
      this.$store.commit('saveData',payload);

      this.flashMessage.success({
        message: 'Successfuly saved !',
        time: 3000
      });

    },
    loadData(){
      this.$store.commit('loadData');
    }
  }
}
</script>

<style lang="scss">
  *{
     padding: 0;
     box-sizing: border-box;
     margin: 0
   }

  html{
    font-family: 'Nunito', sans-serif;
  }

  ul{
    list-style: none;
    display: flex;
    align-items: center;
  }

  li{
    padding: 10px;
    color: #f4f4f4;
  }

  a{
    text-decoration: none;
    color: #f4f4f4;
    margin: .5rem;
  }

  a:focus{
    outline: none;
  }

  .saved{
    margin: 3rem 0;
    position: absolute;
    top: -2.5rem;
    left: 14rem;
  }

  .btn-day{
    border: 1px solid #cf7500 !important ;
    background-color: #000;
    cursor: pointer;
    outline: none;
    font-weight: bold;
  }

  .btn-day:hover{
    color: #cf7500;
    font-weight: bold;
  }

  .active{
    color: #cf7500;
    font-weight: bold;  
  }

  .header__start li:first-child{
    text-transform: uppercase;
    font-weight: bold;
  }

  .container{
     padding: 3% 15%;
     position: relative;
  }

  .header{
    height: 4rem;
    padding: 5px;
    background-color: #000;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
  }

  .content{
    margin-top: 3rem;
  }
  
</style>
