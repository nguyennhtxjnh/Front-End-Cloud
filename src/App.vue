<template>
  <div id="app" class="cusM" >
    <!--    <img src="./assets/logo.png">-->
    <router-view :key="$router.fullPath"/>

    <notifications class="myCustom" group="foo"  position="bottom right" width="460"/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    margin-top: 60px;
  }
  .myCustom {

  }
  .myCustom > span > div > .warn{
    font-size: 18px;
  }
  .myCustom > span > div > .error{
    font-size: 18px;
  }
  .myCustom > span > div > .success{
    font-size: 18px;
  }
  .myCustom > .warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
  .myCustom > .error  {
    background: #E54D42;
    height: 100px;
    border-left-color: #B82E24;
  }
  .myCustom > .success  {
    background: #68CD86;
    height: 100px;
    border-left-color: #42A85F;
  }
</style>
