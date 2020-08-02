<!--
 * @name: 组件名
 * @Description: 组件描述
 * @module: 组件存放位置
 * @Version: 0.1.0
 * @Autor: hselenat
 * @Date: 2020-08-01 16:33:21
 * @LastEditors: hselenat
 * @LastEditTime: 2020-08-01 21:44:56
 * @example: 调用示例
-->
<template>
  <div>
    <!-- <div>导航</div> -->
    <nuxt />
    <!-- <div>底部信息</div> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.login-container
  width 100%
  min-height 100%
  .login-form
    width 520px
    padding 160px 0
    margin 0 auto
    overflow hidden
  .title-container
    text-align center
    margin-bottom 20px
    img
      width 200px
  .captcha-container
    width 340px
    position relative
    .captcha
      position absolute
      right -110px
      img
        width 90px
        height 50px
        cursor pointer
</style>
