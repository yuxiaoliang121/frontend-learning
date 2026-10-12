<script setup>
import { ref } from 'vue'
const user = ref({
  name: '林一鸣',
  avatar: 'https://picsum.photos/id/1005/200/200',
  role: 'organizer'
})
const isOnDuty = ref(true)
const themeColor = ref('#2f6fed')
const skills = ref(['需求梳理', '活动执行', '数据复盘'])
const ROLE_TEXT = {
  organizer: '活动组织者',
  auditor: '审核员',
  student: '学生'
}
</script>

<template>
  <section class="profile-card" :style="{ '--theme-color': themeColor }">
    <img class="profile-card__avatar" :src="user.avatar" :alt="user.name" />
    <h2 class="profile-card__name">{{ user.name }}</h2>
    <span
      class="role-tag"
      :class="{
        'role-tag--organizer': user.role === 'organizer',
        'role-tag--auditor': user.role === 'auditor',
        'role-tag--student': user.role === 'student'
      }"
    >
      {{ ROLE_TEXT[user.role] ?? '未知' }}
    </span>
    <span class="duty-tag" :class="{ 'duty-tag--off': !isOnDuty }">
      {{ isOnDuty ? '在岗' : '请假' }}
    </span>
    <ul class="skill-list">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
    <div class="profile-card__actions">
      <button @click="isOnDuty = !isOnDuty">切换在岗状态</button>
      <button @click="themeColor = '#2f6fed'">蓝色主题</button>
      <button @click="themeColor = '#0f9d58'">绿色主题</button>
      <button @click="themeColor = '#e8710a'">橙色主题</button>
    </div>
  </section>
</template>

<style scoped>
.profile-card {
  width: 320px;
  padding: 28px 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: system-ui, sans-serif;
  transition: all 0.3s ease;
}

.profile-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.profile-card__avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--theme-color, #2f6fed);
}

.profile-card__name {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: var(--theme-color, #2f6fed);
}

.role-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  color: #fff;
}
.role-tag--organizer {
  background-color: #2f6fed;
}
.role-tag--auditor {
  background-color: #7b61ff;
}
.role-tag--student {
  background-color: #0f9d58;
}

.duty-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  background-color: #0f9d58;
  color: #fff;
}
.duty-tag--off {
  background-color: #f44336;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 8px 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-list li {
  padding: 3px 9px;
  background-color: #f0f4ff;
  color: var(--theme-color, #2f6fed);
  border-radius: 6px;
  font-size: 13px;
}

.profile-card__actions {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.profile-card__actions button {
  padding: 7px 12px;
  border: none;
  border-radius: 8px;
  background-color: var(--theme-color, #2f6fed);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.profile-card__actions button:hover {
  opacity: 0.85;
}
.profile-card__actions button:active {
  opacity: 0.7;
}
</style>
