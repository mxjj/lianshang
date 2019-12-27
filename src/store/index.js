import Vue from "vue"
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import footer_store from './fool_tabbar/fool_tabbar'
import actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        footer_store
    }

})

export default store