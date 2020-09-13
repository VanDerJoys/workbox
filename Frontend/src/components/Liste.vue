<template>
  <ul>
      <li v-for="(fruit, index) in fruits" v-bind:key="index">{{fruit}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Liste',
    data: function(){
        return{
            fruits: ['banane', 'orange', 'fraise']
        }
    }
}
</script>

<style>

</style>