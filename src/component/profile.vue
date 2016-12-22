<template>
  <div id = 'profile'>
      <div id = 'top'>
         <div id = 'profile_icon' >
           <img src="../assets/profile_icon.jpeg"/>
           <p id = 'user_name'>
             这是测试用户
           </p>
           <p id = 'mood'>
             一句话介绍一下自己吧，让别人更了解你
           </p>
         </div>

         <div id = 'top_back' >
            <img src="../assets/top_back.jpg"/>
         </div>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="title"
          label="条目"
          width="120">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          width="520">
        </el-table-column>
        <el-table-column
          inline-template
          :context="_self"
          fixed="right"
          label="操作">
          <span>
            <el-button
              size="small"
              @click="handleEdit($index, row)">
              编辑
            </el-button>
          </span>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  export default ({
      data() {
        return {
          tableData: [{
            title: '登陆名',
            content: 'zz'
          }, {
            title: '昵称',
            content: '222'
          }, {
            title: '邮箱',
            content: 'fdfd@test.com'
          }, {
            title: '简介',
            content: '这是简介'
          }]
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
          this.$prompt('请输入新' + row.title, '更新' + row.title, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            row.content = value;
            this.$message({
              type: 'success',
              message: '你的' + row.title + '是: ' + value
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }
      }
    })
</script>

<style>
#top {
  position: relative;
}

#top_back {
  /*float: left;*/
  /*bottom: 50px;*/
  text-align: center;
  width: 100%;
}

#profile_icon {
  top: 30px;
  width: 100%;
  position: absolute;
  text-align: center;
}
</style>
