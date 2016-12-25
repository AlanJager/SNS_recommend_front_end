<template>
  <div id = 'chart' v-if="loggedIn">
      <BarChart></BarChart>
  </div>
</template>
<script>
  import auth from '../auth'
  import BarChart from '../chart/barChart'

  export default {
      data() {
        return {
          loggedIn: auth.loggedIn()
        }
      },
     components: {
       BarChart
     },
     created () {
       auth.onChange = loggedIn => {
         this.loggedIn = loggedIn
       }
     }
   }
</script>

<style>

</style>
