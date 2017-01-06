<template>
  <div id = 'recommend' v-if="loggedIn">
    <div class="recommend-tab"></div>
    <el-autocomplete
     :fetch-suggestions="querySearchAsync"
     placeholder="请输入内容"
     @select="handleSelect" width="180"
   ></el-autocomplete>
     <el-button type="primary" ><router-link id='rating_button' to="/rating">评价</router-link></el-button>


     <el-row>
       <el-col class="info" :span="6" v-for="info in infos">
         <el-card :body-style="{ padding: '0px' }">
           <a href="#"><img :src="info.icon" class="image" width="230" height="230"  ></a>
         <div class="grid-content bg-purple">
           <span>{{ info.name }}</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
               <el-button type="text" class="button">操作按钮</el-button>
             </div>
         </div>
         </el-card>
       </el-col>
    </el-row>
  </div>
</template>

<script>
  import auth from '../auth'
  import data from "../store/data"
  export default({
    data() {
        return {
            uesr_id: [],
            timeout:  20,
            currentDate: new Date(),
            loggedIn: auth.loggedIn(),
            ref: [
              {
              '1878669082': data.state.recommendInfo1,
              '2625091830': data.state.recommendInfo2,
              '3236937630': data.state.recommendInfo3,
              '3860500107': data.state.recommendInfo4,
              '5294871376': data.state.recommendInfo5,
            }],
            infos: data.defaultInfo,
          };
        },
        created () {
          auth.onChange = loggedIn => {
            this.loggedIn = loggedIn
          }
        },
        methods: {
          loadAll() {
            return [
              { "value": "白菜浪人", "id": "1878669082"},
              { "value": "努力寻找下巴的王子", "id": "2625091830"},
              { "value": "锦州首班车", "id": "3236937630"},
              { "value": "夢遊的棋子", "id": "3860500107"},
              { "value": "守望先锋趣闻", "id": "5294871376"}
            ];
          },
          querySearchAsync(queryString, cb) {
            var uesr_id = this.uesr_id;
            var results = queryString ? uesr_id.filter(this.createStateFilter(queryString)) : uesr_id;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createStateFilter(queryString) {
            return (state) => {
              return (state.value.indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelect(item) {
            console.log(item.value)
            this.infos = this.ref[0][item.id]
            // this.infos = data.recommendInfo[0][item.value]
          }
        },
        mounted() {
          this.uesr_id = this.loadAll();
        }
  })
</script>

<style>
.recommend-tab {
  height: 50px;
}
#rating_button {
  color: #ffffff;
}

.info {
  height: 350px;
  weight: 350px;
}
</style>
