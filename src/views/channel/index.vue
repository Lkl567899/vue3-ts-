<template>
    <Card :title="'文章管理'">
        <template #extra><el-button type="primary">添加分类</el-button></template>
        <el-table :data="List" style="width: 100%" :cell-style="{padding:'15px 0'}">
            <el-table-column type="index" width="80" label="序号" align="center"/>
            <el-table-column prop="cate_name" label="分类名称" align="center"/>
            <el-table-column prop="cate_alias" label="分类别名"  align="center"/>
            <el-table-column label="操作" width="100" align="center">
                <template #default="scope">
                    <el-button size="small" type="primary" :icon="Edit" circle plain @click="handleEdit(scope.row)">
                    </el-button>
                    <el-button size="small" :icon="Delete" circle plain type="danger" @click="handleDelete(scope.row)">
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </Card>
</template>

<script setup lang="ts">
import { GetCateListAPI, type cateList } from '@/api/channel';
import { Delete, Edit } from '@element-plus/icons-vue';
import { ref } from 'vue';
const List = ref<cateList[]>([])
const getCateList = async () => {
    const res = await GetCateListAPI()
    List.value = res.data
    console.log(res.data);
}
getCateList()
//修改
const handleEdit = (row: cateList) => { }
// 删除
const handleDelete = (row: cateList) => { }
</script>

<style scoped lang="scss"></style>