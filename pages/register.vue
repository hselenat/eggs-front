<!--
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 20:57:16
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-02 11:39:31
 * @example: 调用示例
-->
<template>
  <div class="login-container">
    <el-form
      ref="registerForm"
      class="login-form"
      label-width="100px"
      :model="form"
      :rules="rules"
    >
      <div class="title-container">
        <img src="../static/portfolio@3x.png" alt="logo">
      </div>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item prop="captcha" label="验证码" class="captcha-container">
        <div class="captcha">
          <img :src="code.captcha" alt="验证码" @click="resetCaptcha">
        </div>
        <el-input v-model="form.captcha" placeholder="请输入验证码" />
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item prop="repassword" label="确认密码">
        <el-input v-model="form.repassword" type="password" placeholder="请再次输入密码" />
      </el-form-item>
      <el-form-item prop="repassword" label="">
        <el-button type="primary" @click.native.prevent="handleRegister">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  layout: 'login',
  data () {
    return {
      form: {
        email: '942430793@qq.com',
        captcha: '',
        nickname: 'pikachu',
        password: '',
        repassword: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: '请输入邮箱'
          },
          {
            type: 'email',
            message: '请输入正确的邮箱格式'
          }
        ],
        captcha: [
          {
            required: true,
            message: '请输入验证码'
          }
        ],
        nickname: [
          {
            required: true,
            message: '请输入昵称'
          }
        ],
        password: [
          {
            required: true,
            pattern: /^[\w_-]{6-12}$/g,
            message: '请输入6-12位密码'
          }
        ],
        repassword: [
          {
            required: true,
            message: '请输入再次密码'
          },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次密码不一致！'))
              }
              callback()
            }
          }
        ]
      },
      code: {
        captcha: '/api/captcha'
      }
    }
  },
  methods: {
    handleRegister () {
      // eslint-disable-next-line require-await
      this.refs.registerForm.validator(async (valid) => {
        if (valid) {
          // eslint-disable-next-line no-console
          console.log('校验成功', valid)
          // @todo 发送注册请求
          // eslint-disable-next-line no-unused-vars
          const obj = {
            email: this.form.email,
            captcha: this.form.captcha,
            nickname: this.form.nickname,
            password: md5(this.form.password)
          }
          // eslint-disable-next-line no-unused-vars
          const ret = await this.$http.post('/user/register', obj)
          // code = 0 成功
          if (ret.code === 0) {
            this.$alert('注册成功', '成功', {
              confirmButtonText: '去登录',
              callback: () => {
                this.$router.push('/login')
              }
            })
          } else {
            this.$message.error(ret.message)
          }
        } else {
          // eslint-disable-next-line no-console
          console.log('校验失败')
        }
      })
    },
    resetCaptcha () {
      this.code.captcha = '/api/captcha?_t' + new Date().getTime()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
