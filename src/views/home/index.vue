<template>
  <template v-for="item in items" :key="item.id">
    <div v-if="item.state">
      {{ item.name }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { name: "3mz", id: 1, state: true },
  { name: "pite", id: 2, state: true },
  { name: "roieee", id: 3, state: false },
]);
</script>

<style scoped></style>
