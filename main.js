import Vue from 'vue'
import App from './App'
import api from '@/common/vmeitime-http/'
import tui from './common/httpRequest'
Vue.prototype.tui = tui
Vue.prototype.$api = api
import store from './store'
Vue.prototype.$store = store

// 引入tab页面
import tab1 from './pages/start/tab1/index.vue'
Vue.component('tab1',tab1)
import tab2 from './pages/start/tab2/index.vue'
Vue.component('tab2',tab2)
import tab3 from './pages/start/tab3/index.vue'
Vue.component('tab3',tab3)
import tab4 from './pages/start/tab4/index.vue'
Vue.component('tab4',tab4)
import tab5 from './pages/start/tab5/index.vue'
Vue.component('tab5',tab5)
import cuCustom from './components/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

import global from '@/common/chat/global.js'
Vue.prototype.$global = global

App.mpType = 'app'

Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
 

const app = new Vue({
    ...App,store
})
app.$mount()
