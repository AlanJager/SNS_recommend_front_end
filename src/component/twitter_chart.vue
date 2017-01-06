<template>
  <div id = 'chart' v-if="loggedIn">
      <span>main rank</span>
      <TwitterChart></TwitterChart>
      <span>percentage</span>
      <TwitterPercentageChart></TwitterPercentageChart>
  </div>
</template>
<script>
  import auth from '../auth'
  import TwitterChart from '../chart/twitterChart'
  import TwitterPercentageChart from '../chart/twitterPercentageChart'
  export default {
      data() {
        return {
          loggedIn: auth.loggedIn()
        }
      },
     components: {
       TwitterChart,
       TwitterPercentageChart
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
