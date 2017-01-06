<template>
  <div id = 'chart' v-if="loggedIn">
      <span>main rank</span>
      <WeiboChart></WeiboChart>
      <span>percentage</span>
      <WeiboPercentageChart></WeiboPercentageChart>
  </div>
</template>
<script>
  import auth from '../auth'
  import WeiboChart from '../chart/weiboChart'
  import WeiboPercentageChart from '../chart/weiboPercentage'
  export default {
    data() {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    components: {
       WeiboChart,
       WeiboPercentageChart
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
