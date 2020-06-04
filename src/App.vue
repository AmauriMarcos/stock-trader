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
            <p>QTD BMW ({{getQuantity.bmw}})</p>
            <p>QTD Google ({{getQuantity.google}})</p>
            <p>QTD Apple ({{getQuantity.apple}})</p>
            <p>QTD Twitter ({{getQuantity.twitter}})</p>
            <div class="header__end">
              <ul>
                 <li>End Day</li>
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
    },
    getQuantity(){
       return this.$store.getters.getQuantity;
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
  p{
    color: #ccc;
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
