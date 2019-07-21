<template>
  <v-container>
    <flipbook :pages="pages" v-slot="flipbook">
      <button @click="flipbook.flipLeft">Previous Page</button>
      <button @click="flipbook.flipRight">Next Page</button>
    </flipbook>
    <flipbook class="flipbook" :pages="['array', 'of', 'image', 'URLs']"></flipbook>
  </v-container>

</template>

<script>
  import Flipbook from 'flipbook-vue'
    export default {
        name: "Flipbook"
    }
</script>

<style scoped>
  .flipbook .viewport {
    width: 90vw;
    height: 90vh;
  }
</style>
