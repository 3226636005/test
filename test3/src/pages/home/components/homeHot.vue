<template>
  <div class="wrap">
    <div class="clearfix inner-top">
    <p class="hot-top"><i class="iconfont icon-huo"></i>热门榜单</p>
    <span class="all-top">全部榜单 <i class="el-icon-arrow-right"></i></span>
    </div>
    <swiper :options="swiperOption" class="wrap-content">
      <!-- slides -->
       <swiper-slide v-for="item in hotTop" :key="item.id">
        <div class="list-top">
          <img :src="item.imgUrl" alt="" >
          <p class="p1 ellipsis">{{item.title}}</p>
          <p class="p2"><span>{{item.price}}</span>起</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
    <div class="swiper-pagination btn-row"  slot="pagination"></div> 
    </swiper>
  </div>
</template>
<script>
export default {
  name : 'homeHot',
    data () {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      },
      hotTop: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '少林寺',
          price: '￥60'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州动物园',
          price: '￥30'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州海洋馆',
          price: '￥8'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州方特欢乐世界',
          price: '￥189'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州方特水上乐园',
          price: '￥85'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '世纪欢乐园',
          price: '￥48.8'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州动物园',
          price: '￥30'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州海洋馆',
          price: '￥8'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
          title: '郑州方特欢乐世界',
          price: '￥189'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
  padding:.24rem .3rem;
  height: 3rem;
}
.hot-top{
  float: left;
  font-size: .32rem;
}
.hot-top i{
  color: orange;
  margin-right: .1rem;
}
p{
  // float: left;
  color: black;
}
.wrap-content img{
  width: 2rem;
  height: 2rem;
}
.list-top{
  float: left;
}
.all-top{
  float: right;
}
.wrap-content{
  height: 2.8rem;
  margin-top: .24rem;
}
.swiper-scrollbar{
  height: 0.4rem;
}
.swiper-scrollbar-drag{
  background: #ccc;
}
.list-top .p1{
  text-align: center;
  color: #212121;
  font-size: .24rem;
  line-height: .32rem;
}
.p2{
  color: #616161;
  text-align: center;
}
.p2 span{
  color: orange;
}
</style>
