<!--
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 16:35:02
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-01 17:32:54
 * @example: 调用示例
-->
<template>
  <div>
    <el-form class="login-form" :rules="rules">
      <el-form-item props="email">
        <span>
          <i class="el-icon-mobile" />
        </span>
        <el-input placeholder="邮箱" />
      </el-form-item>
      <el-form-item props="password">
        <span>
          <i class="el-icon-lock" />
        </span>
        <el-input placeholder="密码" />
      </el-form-item>
      <el-form-item props="captcha">
        <el-input placeholder="验证码" />
        <img :src="captcahUrl" alt="图片验证码" @click="updateCaptcha">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      relus: [],
      captcahUrl: ''
    }
  },
  mounted () {
    this.updateCaptcha()
  },
  methods: {
    updateCaptcha () {
      this.captcahUrl = '/api/captcha?_t=' + new Date().getTime()
    }
  }
}
</script>

<style lang="stylus">
.login-form
  width 800px
  margin 50px auto
</style>
