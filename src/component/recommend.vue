<template>
  <div id = 'recommend' v-if="loggedIn">
    <div class="recommend-tab"></div>
    <el-autocomplete
     v-model="state4"
     :fetch-suggestions="querySearchAsync"
     placeholder="请输入内容"
     @select="handleSelect" width="180"
   ></el-autocomplete>
     <el-button type="primary" icon="search">搜索</el-button>
     <el-button type="primary" ><router-link id='rating_button' to="/rating">评价</router-link></el-button>


     <el-row>
       <el-col :span="8" v-for="info in infos">
         <el-card :body-style="{ padding: '0px' }">
           <a href="#"><img :src="info.icon" class="image" width="350" height=""  ></a>
         <div class="grid-content bg-purple">
           <span>{{info.name}}</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
               <el-button type="text" class="button">操作按钮</el-button>
             </div>
         </div>
         </el-card>
       </el-col>
      <el-col :span="8">
         <el-card :body-style="{ padding: '0px' }">
           <a href="#"><img src="../assets/yeweicai.jpg" class="image" width="350" height=""  ></a>
       <div class="grid-content bg-purple">
           <span>叶伟才</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
               <el-button type="text" class="button">操作按钮</el-button>
             </div>
       </div>
       </el-card>
       </el-col>


       <el-col :span="8">
       <el-card :body-style="{ padding: '0px' }">
           <a href="#"><img src="../assets/zouye.jpg" class="image" width="350" height="" ></a>
       <div class="grid-content bg-purple-light">
           <span>邹烨</span>
             <div class="bottom clearfix">
               <time class="time">{{ currentDate }}</time>
               <el-button type="text" class="button">操作按钮</el-button>
             </div>
       </div>
       </el-card>
       </el-col>


       <el-col :span="8">
       <el-card :body-style="{ padding: '0px' }">
           <a href="#"><img src="../assets/wangshugen.jpg" class="image" width="350" height="" ></a>
       <div class="grid-content bg-purple">
           <span>王树根</span>
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
            restaurants: [],
            state4: '',
            timeout:  null,
            currentDate: new Date(),
            loggedIn: auth.loggedIn(),
            infos: data.defaultInfo
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
              { "value": "叶伟才", "address": "长宁区新渔路144号" },
              { "value": "邹烨", "address": "上海市长宁区淞虹路661号" },
              { "value": "王树根", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }
            ];
          },
          querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 3000 * Math.random());
          },
          createStateFilter(queryString) {
            return (state) => {
              return (state.value.indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelect(item) {
            console.log(item);
          }
        },
        mounted() {
          this.restaurants = this.loadAll();
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
</style>
