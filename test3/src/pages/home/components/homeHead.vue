<template>
  <div class="head">
  <el-row>
  <el-col :span="4"><div class="grid-content bg-purple"><i class="el-icon-arrow-left"></i></div></el-col>
  <el-col :span="15"><div class="grid-content bg-purple-light">
    <div class="search">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题" style="outline:none">
    </div>
    </div></el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple">
      <p><router-link to="/city">{{this.$store.state.city}}</router-link><i class="el-icon-caret-bottom"></i></p>
      </div>
  </el-col>
</el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex' //引入mapState辅助函数
export default {// 导出当前文件
  name: 'homeHead',
  computed: {
    ...mapState(['city']) //把mapState中的city值，映射到当前的组件的computed计算属性中的city属性
  }
}
</script>
<style lang="less">
.head{
  height: 44px;
  background: #00bcd4;
  text-align: center;
}
input{
  width: 90%;
  border-radius: .1rem;
  border: none;
  text-align: center;
  line-height: .6rem;
}
.el-icon-arrow-left{
  color: white;
}
p{
  color: aliceblue;
}
a{
  color: white;
  text-decoration: none;
}
</style>
