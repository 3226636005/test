import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
const store = new vuex.Store({
  state: {
    'city': localStorage.getItem('city') || '郑州'
  },
  actions: {
    change (ctx, city) {
      ctx.commit('currentCity', city)
      // console.log(ctx, city)
    }
  },
  mutations: {
    currentCity (state, city) {
      state.city = city
      localStorage.setItem('city', city)
    }
  }
})
export default store
