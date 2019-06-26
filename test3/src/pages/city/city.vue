<template> 
  <div>
    <city-head></city-head>
    <city-search :citys="citys"></city-search>
    <city-list :hotList="hotList" :citys="citys" @change="changeArea" :area="area"></city-list>
  </div>
</template>
<script>
import cityHead from '@/pages/city/components/cityHead.vue'
import citySearch from '@/pages/city/components/citySearch.vue'
import cityList from '@/pages/city/components/cityList.vue'
export default {
  name: 'city',
  components : {
    cityHead ,
    citySearch ,
    cityList
  },
  data () {
    return {
      hotList: [],
      citys: [],
      area: ''
    }
  },
  methods: {
    getCityInfo () {
      this.$axios.get('mock/city.json').then(res =>{
        res = res.data.data
        this.hotList = res.hotCities
        this.citys = res.cities
        // console .log(res)
      }).catch(err =>{
        console.log(err)
      })
    },
    changeArea (world){
      this.area = world
      // console.log(world)
    }
  },
   mounted() {
     this.getCityInfo()
   }
}
</script>
<style lang="less" scoped>

</style>
