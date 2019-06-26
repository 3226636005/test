<template>
  <div>
    <router-link to='/'>
      <div class="rol"><i class="el-icon-arrow-left"></i></div>
    </router-link>
    <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
    <p>故宫</p>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner'
}
</script>
<style lang="less" scoped>
img{
  width: 375px;
  height: 206px;
}
.rol{
  position: absolute;
  height:36px;
  width: 36px;
  border: 1px solid gray;
  border-radius: 50%;
 background-color: gray;
}
i{
  position: absolute;
  font-size: .7rem;
}
p{
  color: black;
}
</style>
