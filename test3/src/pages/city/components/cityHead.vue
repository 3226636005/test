<template>
  <div class="wrap">
    <el-row>
    <el-col :span="4"><router-link to="/">&lt;</router-link></el-col>
    <el-col :span="20">城市选择</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'cityHead'
}
</script>
<style lang="less" scoped>
.wrap{
  background: #00bcd4;
  height: .4rem;
  line-height: .4rem;
  background-color: #00bcd4;
  padding: .2rem 1rem;
  color: #fff;
}
.el-col-4 {
  font-size: .5rem;
  margin-left: -25px;
}
.el-col-20 {
  text-align: center;
  font-size: .5rem;
}
a{
  color: white;
  text-decoration: none;
}
</style>
