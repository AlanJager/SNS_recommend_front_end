<template>
  <div id = 'navigation'>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">推荐</template>
        <el-menu-item index="2-1"><router-link to="/recommend">算法1</router-link></el-menu-item>
        <el-menu-item index="2-2">算法2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" v-if="loggedIn"><router-link to="/profile">个人信息</router-link></el-menu-item>
      <el-menu-item index="4" v-if="loggedIn">退出登录</el-menu-item>
      <el-menu-item index="5" v-if="!loggedIn"><router-link to="/login">登录</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import auth from '../auth'
  export default ({
    data () {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key == 4) {
          this.open();
        }
      },
      open() {
        auth.logout()
        this.$alert('已经退出登陆', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        window.location.reload();
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
