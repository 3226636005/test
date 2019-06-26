<template>
<div>
  <home-head></home-head>
  <home-swiper :swiper="swiperList"></home-swiper>
  <home-menu :menu="menuList"></home-menu>
  <home-hot></home-hot>
  <home-like :like="likeList"></home-like>
  <home-week :week="weekList"></home-week>
</div>
</template>
<script>
import homeHead from '@/pages/home/components/homeHead.vue'
import homeSwiper from '@/pages/home/components/homeSwiper.vue'
import homeMenu from '@/pages/home/components/homeMenu.vue'
import homeHot from '@/pages/home/components/homeHot.vue'
import homeLike from '@/pages/home/components/homeLike.vue'
import homeWeek from '@/pages/home/components/homeWeek.vue'
import { mapState } from 'vuex'
export default {// 导出当前文件
  name: 'home',
  components: {
    homeHead,
    homeSwiper,
    homeMenu,
    homeHot,
    homeLike,
    homeWeek
  },
  computed:{
    ...mapState({
      city: 'city'
    })
  },
  data () {
    return {
      swiperList: [],
      menuList: [],
      likeList: [],
      weekList: []
    }
  },
  methods: {
    getInfo () {
      this.$axios.get('mock/index.json?city=' + this.city).then(res => {
        res = res.data.data
        this.swiperList = res.swiperList
        this.menuList = res.iconList
        this.likeList = res.recommendList
        this.weekList = res.weekendList
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getInfo()
  },
}

</script>
<style>

</style>
