<template>
  <div id = 'navigation'>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">推荐</template>
        <el-menu-item index="2-1">算法1</el-menu-item>
        <el-menu-item index="2-2">算法2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/profile">个人信息</router-link></el-menu-item>
      <el-menu-item index="4">退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default ({
    methods: {
      handleSelect(key, keyPath) {
        if (key == 4) {
          this.open();
        }
      },
      open() {
        this.$confirm('确认要退出登陆吗', '退出确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },

  })
</script>
<style>
  #navigation {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #d3dce6
  }

  #profile {
    position: relative;
    width: 920px;
    text-align: left;
    background-color: #f4f4f4;
    left: 15%;
  }
</style>
