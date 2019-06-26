<template>
  <div class="wrap" ref="a">
    <div class="content">
      <p class="title">热门城市</p>
    <el-row>
      <el-col class="list-item" :span="8" @click.native="changeCity(item.name)" v-for="item in hotList" :key="item.id">{{item.name}}</el-col>
    </el-row>
    <div>
      <p class="title">字母排序</p>
    <el-row>
      <el-col class="list-item list-border" :span="4" @click.native="changeHandler" v-for="(value, key, index) in citys " :key="index">{{key}}</el-col>
    </el-row>
    </div>
    <div v-for="(value,key,index) in citys" :key="index" :ref="key">
      <!-- A-Z -->
      <p class="title">{{key}}</p>
    <el-row>
      <el-col class="list-item border-r" :span="6" @click.native="changeCity(item.name)" v-for="(item, index) in value" :key="index">{{item.name}}</el-col>
    </el-row>
    </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name : 'cityList',
  props: ['hotList','citys','area'],
  methods:{
    changeHandler (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText);
    },
    changeCity (city) {
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
  },
    mounted () {
    this.scroll = new BScroll(this.$refs.a,{
      click: true
    })
  },
   watch: {
     area () {
       if (this.area) {
         const ele = this.$refs[this.area][0]
         this.scroll.scrollToElement(ele)
        //  console.log(this.$refs[this.area])
       }
     }
    }
  }

</script>
<style lang="less" scoped>
.wrap{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 1.6rem; 
  overflow: hidden;
}
.title{
  padding-left: .3rem;
  line-height: .72rem;
  background: #f5f5f5;
  font-size: .24rem;
}
.list-item{
  line-height: .92rem;
  text-align: center;
  border-bottom: .02rem solid #ddd;
  border-right: .02rem solid #ddd;
  margin-bottom: -1px;
  margin-right: -1px;
}
.list-border{
  border: none;
}
.border-r:nth-child(4n){
  border-right: none;
  margin-right: 0;
}
.el-col:nth-child(3n){
  border-right: none;
  margin-right: 0;
}
p{
  color: black;
}
</style>
