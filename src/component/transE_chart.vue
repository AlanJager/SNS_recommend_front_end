<template>
  <div id = 'chart' v-if="loggedIn">
      <span>main rank</span>
      <BarChart></BarChart>
      <span>percentage</span>
      <PercentageChart></PercentageChart>
  </div>
</template>
<script>
  import auth from '../auth'
  import BarChart from '../chart/barChart'
  import PercentageChart from '../chart/percentageChart'
  export default {
      data() {
        return {
          loggedIn: auth.loggedIn()
        }
      },
     components: {
       BarChart,
       PercentageChart
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
