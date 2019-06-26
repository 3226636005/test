<template>
  <div class="wrap">
    <input type="text" placeholder="输入城市名或拼音" v-model="inputValue">
    <div class="inner-list" ref="list" v-show="inputValue">
      <div>
        <p v-for="(item,index) in resultList" @click="changeCity(item.name)" :key="index">{{item}}</p>
        <p v-show="!resultList.length">找不到搜索结果</p>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { clearTimeout, setTimeout } from 'timers'
export default {
  name :'citySearch',
  props :['citys'],
  data () {
    return {
      inputValue: '',
      resultList: [],
      timer: null
    }
  },
  methods: {
     changeCity (city) {
      this.$store.dispatch('change',city)
      this.$router.push('/')
    }
  },

  watch: {
    inputValue () {
      if (this.inputValue === '') {
        this.resultList = null
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      const res = []
      this.timer = setTimeout(() =>{
       for(let i in this.citys){
        this.citys[i].forEach( item => {
        if (item.spell.indexOf(this.inputValue) > -1 || item.name.indexOf(this.inputValue) >-1) {
          res.push(item.name)
        }
      })
    }
      this.resultList = res
      } , 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.list, {
      click: true
    })
  }
}
</script>
<style lang="less" scoped>
.wrap{
  height: .72rem;
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
.inner-list{
  position: absolute;
  z-index: 1;
  top: 1.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: .3rem;
  background: #cccccc;
  text-align: left;
  overflow: hidden;
}
.inner-list p{
  line-height: .6rem;
}

</style>
