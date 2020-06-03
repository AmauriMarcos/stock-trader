<template>
  <div class="stocks">

     <div class="bmw box">
       <div class="bar">
          <h3>BMW <span>(Price: {{getPrices[0].bmw}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity">
       <button>Buy</button>
     </div>

     <div class="google box">
       <div class="bar">
         <h3>Google <span>(Price: {{getPrices[1].google}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity">
       <button>Buy</button>
     </div>

     <div class="apple box">
       <div class="bar">
         <h3>Apple <span>(Price: {{getPrices[2].apple}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity">
       <button>Buy</button>
     </div>

     <div class="twitter box">
       <div class="bar">
         <h3>Twitter <span>(Price: {{getPrices[3].twitter}})</span></h3>
       </div>
       <input type="text" placeholder="Quantity">
       <button>Buy</button>
     </div>
  </div>
</template>

<script>
export default {
   computed: {
     getPrices(){
       return this.$store.getters.getPrices;
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