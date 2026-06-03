<template>
  <template v-for="item in items" :key="item.id">
    <div v-if="item.state">
      {{ item.name }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { PostRegAPI } from "@/api/account";
import { ref } from "vue";

const items = ref([
  { name: "3mz", id: 1, state: true },
  { name: "pite", id: 2, state: true },
  { name: "roieee", id: 3, state: false },
]);
const PostReg = async () => {
  const res = await PostRegAPI({username:'874523b',password:'111111',repassword:'111111'})
  console.log(res, '成功了');
}
PostReg()
</script>

<style scoped></style>
