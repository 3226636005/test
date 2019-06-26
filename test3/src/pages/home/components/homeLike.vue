<template>
<div>
  <div class="wrap">
  <p class="title"><i class="iconfont icon-xinheart118"></i>猜你喜欢</p>
 
  <el-row>
    <el-col :span="7">
       <router-link to='/detail'>
      <img src="http://img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_200x200_ca53c65b.jpg" alt="">
      </router-link>
    </el-col>
    <el-col :span="17">
      <p class="name">郑州方特世界乐园</p>
      <p class="desc">评论描述</p>
      <p class="price"><span>￥199</span>起</p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="7">
      <img src="http://img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_200x200_ca53c65b.jpg" alt="">
    </el-col>
    <el-col :span="17">
      <p class="name">郑州方特世界乐园</p>
      <p class="desc">评论描述</p>
      <p class="price"><span>￥199</span>起</p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="7">
      <img src="http://img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_200x200_ca53c65b.jpg" alt="">
    </el-col>
    <el-col :span="17">
      <p class="name">郑州方特世界乐园</p>
      <p class="desc">评论描述</p>
      <p class="price"><span>￥199</span>起</p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="7">
      <img src="http://img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_200x200_ca53c65b.jpg" alt="">
    </el-col>
    <el-col :span="17">
      <p class="name">郑州方特世界乐园</p>
      <p class="desc">评论描述</p>
      <p class="price"><span>￥199</span>起</p>
    </el-col>
  </el-row>
  </div>
</div>
</template>
<script>
export default {
  name: 'homeLike'
}
</script>
<style lang="less" scoped>
.wrap{
  padding-left: .3rem;
}
.title{
  line-height: .88rem;
}
.name{
  margin-top: .26rem;
  line-height: .44rem;
}
.desc{
  font-size: .24rem;
  color: #616161;
  margin: .14rem 0 .22rem;
}
.price span{
  color: #ff8300;
  font-size: .4rem;
}
.icon-xinheart118{
  color: #ff6152;
  margin-right: .06rem
}
img{
  width: 2rem;
  height: 2rem;
}
p{
  color: black;
}
.el-row{
  margin-bottom: .2rem;
}
</style>
