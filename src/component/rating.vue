<template>
  <div id = 'rating' v-if="loggedIn">
    <div class="rating-tab"></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    </el-form-item label="总体评价" prop="desc2">
    <el-form-item>
      <el-rate v-model="value3" show-text >
      </el-rate>
    </el-form-item>
    <el-form-item label="具体评价" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </div>
</template>

<script>
  import auth from '../auth'
  import data from "../store/data"
  export default({
    data() {
        return {
          ruleForm: {
            name: '',
            // region: '',
            date1: '',
            date2: '',
            // delivery: false,
            // // type: [],
            // resource: '',
            value3: 0,
            des2:null,
            desc: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入用户名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            // region: [
            //   { required: true, message: '请选择活动区域', trigger: 'change' }
            // ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            // type: [
            //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            // ],
            // resource: [
            //   { required: true, message: '请选择活动资源', trigger: 'change' }
            // ],
            desc: [
              { required: true, message: '请填写具体评价细节', trigger: 'blur' }
            ]
          },
          value3 : 0,
          loggedIn: auth.loggedIn(),
          date1: '',
          date2: '',
        };
      },
      created () {
        auth.onChange = loggedIn => {
          this.loggedIn = loggedIn
        }
      },
      methods: {
        handleReset() {
          this.$refs.ruleForm.resetFields();
        },
        handleSubmit(ev) {
          this.$refs.ruleForm.validate((valid) => {
            if (valid) {
              alert("提交成功");
              data.state.ratingResults.push({
                date: "2017-01-07",
                name: this.ruleForm.name,
                allvalue: this.value3,
                specificvalue: this.ruleForm.desc
              });
              this.ruleForm.date1 = ''
              this.ruleForm.name = ''
              this.value3 = 0
              this.ruleForm.desc = ''
              // window.location.href="rating_result";
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
  })
</script>

<style>
.rating-tab {
  height: 50px;
}
</style>
