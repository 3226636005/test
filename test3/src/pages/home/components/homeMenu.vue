<template>
  <swiper :options="swiperOption" class="wrap">
      <!-- slides -->
      <swiper-slide v-for="(list, index) in page" :key="index">
        <el-row>
          <el-col :span="6" v-for="item in list" :key="item.id">
            <div class="grid-content bg-purple">
             <img :src="item.imgUrl">
              <p class="keyworlds">{{item.keyworlds}}</p>
            </div>
            </el-col>
        </el-row>
      </swiper-slide> 
      <!-- Optional controls -->
    <div class="swiper-pagination btn-row"  slot="pagination"></div> 
    </swiper>
</template>

<script>
export default {// 导出当前文件
  name: 'homeMenu',
  data() {
    return{
      swiperOption:{
      pagination: {
        el:'.swiper-pagination' ,        
      }
    },
    menuList: [
      {
        id: '0001',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        keyworlds: '景点名片'
      },
      {
        id: '0002',
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png",
        keyworlds: '郑州冰雪世界'
      },
      {
        id: '0003',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
        keyworlds: '郑州园博园'
      },
      {
        id: '0004',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
        keyworlds: '景点名片'
      },
      {
        id: '0005',
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png",
        keyworlds: '景点名片'
      },
      {
        id: '0006',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        keyworlds: '郑州冰雪世界'
      },
      {
        id: '0007',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
        keyworlds: '郑州园博园'
      },
      {
        id: '0008',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        keyworlds: '景点名片'
      },
      {
        id: '0009',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        keyworlds: '郑州园博园'
      },
      {
        id: '0010',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        keyworlds: '景点名片'
      }
  ]
    }
  },
  computed: {
    page () {
      var pages = [] 
      this.menuList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="less" scoped>
img{
  width: 1.1rem;
  height: 1.1rem;
}
.wrap{
  text-align: center;
  margin-top: .2rem;
  height: 3.7rem;
}
p{
  margin-top: .1rem;
  margin-bottom: .1rem;
  color: black;
}
</style>
