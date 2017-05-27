<template>
  <div class="login-box">
    <div class="login-head">
      <h1>菜鸟学堂</h1>
      <h2>与世界分享你的知识、经验和见解</h2>
    </div>
    <div class="login-main">
      <div class="login-sel">
        <a href="javascript:;" class="login-bor">注册</a>
        <a href="javascript:;">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
.login-box{
  background-color: #f7fafc;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  .login-head{
    text-align: center;
    h1,h2{
      font-weight: 400;
    }
    h1{
      font-size: .4rem;
      padding: .2rem 0;
      color:#0f88eb;
    }
    h2{
      padding-bottom: .2rem;
    }
  }
}
</style>