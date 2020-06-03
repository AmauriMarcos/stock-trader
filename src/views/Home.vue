<template>
  <div class="home">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save & Load your data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr>
      <h2>Your Funds: ${{ funds }}</h2>
  </div>
</template>

<script>


export default {
   computed: {
    funds(){
       return this.$store.getters.formatNumber;
    }
  }
};
</script>

<style lang="scss">
  h1{
    margin: 1rem 0 1rem 0;
  }

  p{
    margin-bottom: .5rem;
  }

  hr{
    margin: 1rem 0;
    height: .5px;
  }

  h2{
    margin: 1rem 0;
  }
  .home{
    border: 1px solid #ccc;
    padding: 1% 3%;
  }

</style>