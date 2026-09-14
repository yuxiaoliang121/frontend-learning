<script setup>
import { ref } from 'vue'


//创建一个待办事项的数组
const todos = ref([
  { id: 1, text: '待办事项1', done: false },
  { id: 2, text: '待办事项2', done: true },
  { id: 3, text: '待办事项3', done: false },
])
// 新增：绑定输入框的内容
const newTodoText = ref('')

let nextId = 4;
// 新增：添加待办函数
const addTodo = () => {
  // 去除首尾空格，空内容不添加
  const text = newTodoText.value.trim()
  if (!text) return
  todos.value.push({
    id: nextId, //使用一个变量nextId作为锚点确定添加的元素索引
    text: text,
    done: false
  })
  newTodoText.value = '' // 添加完成清空输入框
}

// 新增：删除待办
const deleteTodo = (id) => {
  todos.value = todos.value.filter(item => item.id !== id)
}

// 原有：统计已完成数量
const doneCount = () => todos.value.filter((item) => item.done === true).length
</script>

<template>
  <div class="todo-wrap">
    <h2>待办清单</h2>
    <!-- 添加待办输入区域 -->
    <div class="todo-add">
      <input
        v-model="newTodoText"
        @keyup.enter="addTodo"
        placeholder="输入新待办，回车添加"
        class="todo-input"
      />
      <button @click="addTodo" class="btn-add">添加</button>
    </div>

    <ul class="todo-list">
      <li v-for="item in todos" :key="item.id" class="todo-item">
        <input type="checkbox" v-model="item.done" class="todo-check" />
        <span :style="{textDecoration: item.done ? 'line-through' : 'none' }">
          {{ item.text }}
        </span>
        <button @click="deleteTodo(item.id)" class="btn-del">删除</button>
      </li>
    </ul>
    <p class="todo-stat">已完成 {{ doneCount() }} / {{ todos.length }}</p>
  </div>
</template>

<style scoped>
.todo-wrap {
  width: 450px;
  margin: 50px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.todo-add {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
.todo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}
.btn-add {
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  gap:10px;
  padding:10px 0;
  border-bottom: 1px solid #eee;
}
.btn-del {
  margin-left: auto;
  padding:4px 10px;
  background: #f56c6c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.todo-stat {
  margin-top:16px;
  color:#666;
}
</style>
