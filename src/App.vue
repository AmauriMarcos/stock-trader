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
<<<<<<< HEAD
<<<<<<< HEAD
            <!-- <p>QTD: BMW({{getQuantity.bmw}})     Google({{getQuantity.google}})
                    Apple({{getQuantity.apple}}) Twitter({{getQuantity.twitter}})</p> -->
=======
            <p>QTD BMW ({{getQuantity.bmw}})</p>
            <p>QTD Google ({{getQuantity.google}})</p>
            <p>QTD Apple ({{getQuantity.apple}})</p>
            <p>QTD Twitter ({{getQuantity.twitter}})</p>
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
=======
        
>>>>>>> solo
            <div class="header__end">
              <ul>
                 <li>
                   <button class="btn-day" @click="changePrices">End Day</button>
                 </li>
                 <li>Save</li>
                 <li>Load</li>
                 <li>Funds: ${{ funds }}</li>
               </ul>
            </div>
        </div> 
        
        <div class="content">
          <router-view></router-view>
        </div>
        
     </div>
        
  </div>
</template>

<script>

export default {
  computed: {
    funds(){
       return this.$store.getters.formatNumber;
<<<<<<< HEAD
<<<<<<< HEAD
    }/* ,
    getQuantity(){
      return this.$store.getters.getQuantity;
    } */
=======
    },
    getQuantity(){
       return this.$store.getters.getQuantity;
=======
    }
  },
  methods:{
    changePrices(){
       this.$store.commit('changePrices');
>>>>>>> solo
    }
>>>>>>> 25f9a8489d2fe8b817ddc760f9d9463e15f6ebf0
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
