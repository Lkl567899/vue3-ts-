<template>
    <el-card>
        <template #header>
            <div class="header">
                <span>{{ title }}</span>
                <div class="extra">
                    <slot name="extra"></slot>
                </div>
            </div>
        </template>
        <!-- 默认插槽 -->
        <slot></slot>
    </el-card>
</template>

<script setup lang="ts">
type Props = {
    title: string
}
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.el-card {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>