<script setup>
import { ref } from 'vue'

//这里的const就相当于java里面的创建一个新的对象
const activity = ref({
  title: '2026 春季校园歌手大赛',
  status: 'signing',            // draft / signing / closed / finished
  cover: 'https://infinityx7-oss.oss-cn-hangzhou.aliyuncs.com/img/sing1.png',
  offline: false
})
//创建海报A
const pA = {
  title: '2026春季校园歌手大赛',
  status: 'singing',
  cover: 'https://infinityx7-oss.oss-cn-hangzhou.aliyuncs.com/img/sing1.png',
  offline: false
}
//创建海报B
const pB = {
  title: '2026春季校园歌手大赛',
  status: 'draft',
  cover: 'https://infinityx7-oss.oss-cn-hangzhou.aliyuncs.com/img/sing2.png',
  offline: false
}
//这里是通过切换标记的形式来确认对象是pA还是pB(不使用数组)
const isA = ref(true)

//接下来创建两个方法，代表上一页还是下一页
//下一页：
function next() {
  isA.value = !isA.value;
  activity.value = isA.value ? pA : pB;
}

//上一页：
function prev() {
  isA.value = !isA.value;
  activity.value = isA.value ? pA : pB;
}

</script>

<template>
  <!-- 外层容器：宽度80%、居中、顶部留间距 -->
  <div class="container">
    <div class="poster-wrap">
      <article class="activity-card1">
        <img :src="activity.cover" :alt="activity.title" class="card-poster" />
        <div class="card-body">
          <h3 class="card-title">{{ activity.title }}</h3>
          <span class="tag"
            :class="{
              'tag--draft': activity.status === 'draft',
              'tag--signing': activity.status === 'signing',
              'tag--closed': activity.status === 'closed',
              'tag--finished': activity.status === 'finished'
            }"
          >
            {{ activity.status === 'draft' ? '草稿' : activity.status === 'signing' ? '报名中' : activity.status === 'closed' ? '已截止' : '已结束' }}
          </span>
          <button class="card-btn" :disabled="activity.status !== 'draft'">下架</button>
        </div>
      </article>
    </div>
    <div>
      <!-- 这里的按钮属性绑定上面的方法，类绑定下面的css样式 -->
      <button class="switch-btn" @click="prev">上一张</button>
      <button class="switch-btn" @click="next">下一张</button>
    </div>
  </div>
</template>


<style scoped>
/* 外层容器样式 */
.container {
  width: 80%;
  margin: 60px auto 0; /* 上边距60px，左右自动居中 */
}

.poster-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
  
}

.activity-card1 {
  width: 320px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.activity-card2 {
  width: 320px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0,0,0,0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  background-color: #109302;
}
.activity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.16);
}

.card-poster {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 16px;
}

.card-title {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 600;
  color: #222;
}

.tag {
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 999px;
  background: #eee;
  color: #666;
}
.tag--signing {
  background: #ec4899;
  color: #fff;
}
.tag--closed {
  background: #6b7280;
  color: #fff;
}
.tag--draft {
  background: #3b82f6;
  color: #fff;
}
.tag--finished {
  background: #10b981;
  color: #fff;
}

.card-btn {
  margin-top: 14px;
  padding: 6px 14px;
  border-radius: 8px;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
}
.card-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.switch-btn {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #FFFFFF;
  cursor: pointer;
  margin-left: 0px;
  margin-right: 190px;
}
.switch-btn:hover {
  background: #f3f4f6;
}
</style>