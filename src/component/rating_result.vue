<template>
  <div id = 'rating-result-tab' v-if="loggedIn">
    <div class="rating-result-tab"></div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        inline-template
        label="日期"
        width="180">
        <div>
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ row.date }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="姓名"
        width="180">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ row.name }}</p>
          <!-- <p>住址: {{ row.address }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ row.name }}</el-tag>
          </div>
        </el-popover>
      </el-table-column>
      <el-table-column
        inline-template
        label="评价"
        width="180">
        <el-popover trigger="hover" placement="top">
          <p>总体评价: {{ row.allvalue }}</p>
          <p>具体评价: {{ row.specificvalue }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ row.allvalue }}</el-tag>
          </div>
        </el-popover>
      </el-table-column>
      <el-table-column
        :context="_self"
        inline-template
        label="操作">
        <div>
          <el-button
            size="small"
            @click="handleRead($index, row)">
            查看
          </el-button>
          <el-button
            size="small"
            @click="handleEdit($index, row)">
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click.native.prevent="handleDelete($index, tableData)">
            删除
          </el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import auth from '../auth'
  export default ({
    data() {
         return {
           tableData: [{
             date: '2016-05-02',
             name: '王小虎',
             allvalue: '不错',
             specificvalue:"能准确反映推荐合理"
           }, {
             date: '2016-05-04',
             name: '王小虎',
             allvalue: '不错'
           }, {
             date: '2016-05-01',
             name: '王小虎',
             allvalue: '不错',
             specificvalue:"能准确反映推荐合理"
           }, {
             date: '2016-05-03',
             name: '王小虎',
             allvalue: '不错',
             specificvalue:"能准确反映推荐合理"
           }],
           loggedIn: auth.loggedIn()
         }
       },
       created () {
         auth.onChange = loggedIn => {
           this.loggedIn = loggedIn
         }
       },
       methods: {
         handleRead(index, row) {
           console.log(index, row);
         },
         handleEdit(index, row) {
           console.log(index, row);
         },
         handleDelete(index, row) {
           row.splice(index, 1);
           console.log(index, row);
         }
       }
  })
</script>

<style>
.rating-result-tab {
  height: 50px;
}
</style>
