import { createApp } from 'vue'

//引入 Element Plus 组件本体
import ElementPlus from 'element-plus'
//引入组件样式（★ 最容易漏的一行，漏了组件就"没穿衣服"）
import 'element-plus/dist/index.css'
//引入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入 iconfont 字体图标（阿里图标库，项目 id 5237229）
import './assets/iconfont/iconfont.css'

import App from './App.vue'

const app = createApp(App)
//全局注册：之后任何 .vue 里都能直接用 <el-button>、<el-table> 等标签
app.use(ElementPlus, { locale: zhCn })

app.mount('#app')