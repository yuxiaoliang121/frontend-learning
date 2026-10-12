<template>
  <div>
  
    <p>姓名：{{ name }}</p>

    <img v-bind:Src="imgUrl" alt="">

    <button @click="changeName">修改名字</button>

    <input v-model="name"/>

    <p v-if="isShow">显示内容</p>

    <ul>
      <li v-for="item in list" :key="item.id">{{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref("张三")
const imgUrl = ref("https://picsum.photos/100")
const isShow = ref(true)
const list = ref([
  {id:1, title:"Vue学习1"},
  {id:1, title:"Vue学习2"}
])

const changeName = ()=>{
  name.value = "李四"
}
</script>

<style>
h2{ color:#42b983; }
</style>