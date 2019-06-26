<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img :src="item.imgUrl">
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
      pagination: {
        autoplay: true,
        el:'.swiper-pagination' , 
        bulletActiveClass: 'swiper-active'           
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6fe8e24861b0b17602dfe68db88f453b.jpg_750x200_22c2868c.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/958b73a77e982638542ec4849d394e18.jpg_750x200_3e7ef3be.jpg'
        },
        {
          id: '0004',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/958b73a77e982638542ec4849d394e18.jpg_750x200_3e7ef3be.jpg'
        },
        {
          id: '0005',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
swiper{
  height: 500px;
}
img{
  width: 100%;
  height: 100px;
}
</style>
