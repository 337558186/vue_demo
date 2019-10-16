<template>
  <div id="logo">
    <div class="login-box" style="margin-top:200px">
      <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
      <el-form :rules="registerFormRules" ref="registrForm" :model="registrUser" label-position="right" label-width="auto" show-message>
        <span class="login-title" style="margin-left:-110px;font-size:30px">欢迎注册</span>

        <div style="margin-top: 5px"></div>

        <el-form-item label="用户名" prop="username" style="margin-left:500px;margin-top:30px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="text" v-model="registrUser.userName" placeholder="输入用户名"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="密码" prop="password" style="margin-left:500px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="password" v-model="registrUser.password" placeholder="输入密码"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="确认密码" prop="password2" style="margin-left:500px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="password" v-model="registrUser.password2" placeholder="确认密码"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="手机号" prop="phone" style="margin-left:500px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="text" v-model="registrUser.phone" placeholder="手机号"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="选择注册的身份" prop="phone" style="margin-left:500px;font-weight:bold">
          <el-col :span="8" >
            <el-select v-model="registrUser.roleId" placeholder="请选择身份">
              <el-option label="管理员" value="2"></el-option>
              <el-option label="普通用户" value="1"></el-option>
            </el-select>
          </el-col>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="onRegit('registrForm')" style="margin-left:-280px">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "login",
        data () {
            var validatePass2 =(rule,value,callback) =>{
                if(value !==this.registrUser.password){
                    callback(new Error("两次密码不一致"));
                }else{
                    callback();
                }
            };
            return{
                registrUser:{
                    userName: '',
                    password: '',
                    password2: '',
                    phone: '',
                    roleId: '',
                },
                registerFormRules: {
                    userName: [
                        {required:true,message:"用户名不可以为空",trigger:"blur"},
                        {min:2,max:30,message: "长度不在2-30之间",trigger:"blur"}
                    ],
                    password: [
                        {required:true,message:"密码不可以为空",trigger:"blur"},
                        {min:6,max:30,message: "长度不在6-30之间",trigger:"blur"}
                    ],
                    password2: [
                        {required:true,message:"确认密码不可以为空",trigger:"blur"},
                        {min:6,max:30,message: "长度不在6-30之间",trigger:"blur"},
                        {validator:validatePass2,trigger:'blur'}
                    ],
                    phone: [
                        {required: true,message:"格式不正确",trigger:"blur"},
                        {min: 7,max: 11,message: '长度在 7 到 11 个字符',trigger:"blur"},
                        ]
                }
            }

        },
        methods: {
            onRegit(formName){   /*就是表单的ref*/
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post("user/registered",this.registrUser)
                            .then(res =>{
                                //注册成功
                                this.$message({
                                    message: "账号注册成功!",
                                    type: 'success'
                                });
                            })
                        this.$router.push('/');
                    } else {
                        console.log('注册失败!!');
                        return false;
                    }
                });
            }
        }
    };
</script>
<style scoped>
  #logo{
    background: url("../../assets/image/login.jpg");
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
</style>

