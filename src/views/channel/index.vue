<template>
    <Card :title="'文章管理'">
        <template #extra><el-button type="primary" @click="addCateImte">添加分类</el-button></template>
        <el-table :data="List" style="width: 100%" :cell-style="{ padding: '15px 0' }">
            <el-table-column type="index" width="80" label="序号" align="center" />
            <el-table-column prop="cate_name" label="分类名称" align="center" />
            <el-table-column prop="cate_alias" label="分类别名" align="center" />
            <el-table-column label="操作" width="100" align="center">
                <template #default="scope">
                    <el-button size="small" type="primary" :icon="Edit" circle plain @click="handleEdit(scope.row)">
                    </el-button>
                    <el-button size="small" :icon="Delete" circle plain type="danger" @click="handleDelete(scope.row)">
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹出框 -->
        <channelDialog ref="dialogRef" @submit="onSubmit"></channelDialog>
    </Card>
</template>

<script setup lang="ts">
import channelDialog from './components/channelDialog.vue';
import { DelCateItemAPI, GetCateListAPI, PostCateItemAPI, PutCateItemAPI, type cateList } from '@/api/channel';
import { Delete, Edit } from '@element-plus/icons-vue';
import { ref } from 'vue';
const List = ref<cateList[]>([])
// 儿子组件
const dialogRef = ref<InstanceType<typeof channelDialog>>()
// 获取表单数据
const getCateList = async () => {
    const res = await GetCateListAPI()
    List.value = res.data
    console.log(res.data);
}
getCateList()
// 添加分类
const addCateImte = () => {
    dialogRef.value?.open({} as cateList)
}
//修改
const handleEdit = (row: cateList) => {
    dialogRef.value?.open(row)
}
// 确认修改
const onSubmit = async (obj: cateList) => {
    console.log(obj);
    if (obj.id) {
        console.log('我是编辑');
        await PutCateItemAPI(obj)
    } else {
        console.log('我是添加');
        await PostCateItemAPI(obj)
    }
    getCateList()
}
// 删除
const handleDelete = async (row: cateList) => {
    await DelCateItemAPI(row.id)
    getCateList()
}


</script>

<style scoped lang="scss"></style>