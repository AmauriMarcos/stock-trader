<template>
  <div>
     <div class="container">
        <div class="header">
            <div class="header__start">
               <ul>
                 <li>Stock Trader</li>
                 <li>Portfolio</li>
                 <li>Stocks</li>
               </ul>
            </div>
            <div class="header__end">
              <ul>
                 <li>End Day</li>
                 <li>Save</li>
                 <li>Load</li>
                 <li>Funds: {{ funds }}</li>
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

  ul{
    list-style: none;
    display: flex;
   
  }

  li{
    padding: 10px;
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
    background-color: rgb(230, 245, 245);
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
  }

  .content{
    margin-top: 3rem;
  }
  
</style>
