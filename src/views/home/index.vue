<template>
  <template v-for="item in items" :key="item.id">
    <div v-if="item.state">
      {{ item.name }}
    </div>
  </template>
  <div @click="go">1111111</div>
</template>

<script setup lang="ts">
import { PostRegAPI } from "@/api/account";
import { ref } from "vue";


const items = ref([
  { name: "3mz", id: 1, state: true },
  { name: "pite", id: 2, state: true },
  { name: "roieee", id: 3, state: false },
]);

const go = () => {
  console.log(123);
ElMessage.error('我是错12313213误')
}
</script>

<style scoped></style>
