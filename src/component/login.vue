<template>
  <div>
    <h2>登 陆</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login">
        <div id="login_username">
          <el-input placeholder="请输入用户名" v-model="email"></el-input>
        <div id="login_tab">

      </div>
        <div id="login_password">
          <el-input placeholder="请输入密码" v-model="pass" type="password"></el-input>
        </div>
      </div>

      <div id="login_tab">

      </div>

      <div id="login_button">
          <el-button type='submit' @click="login">login</el-button>
      <div>

      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      email: 'alanjager@test.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}

#login_username {
  width: 260px;
  position: relative;
  left: 40%;
}

#login_password{
  width: 260px;
  position: relative;
}

#login_tab{
  width: 260px;
  position: relative;
  height: 20px;
}
</style>
