<template>
    <el-dialog v-model="dialogVisible" :title="channelForm.id ? '编辑分类' : '添加分类'" width="500">
        <div>
            <el-form ref="ruleFormRef" :model="channelForm" v-if="dialogVisible" style="padding: 40px;" :rules="rules">
                <el-form-item label="分类名称" prop="cate_name">
                    <el-input v-model="channelForm.cate_name" />
                </el-form-item>
                <el-form-item label="分类别名" prop="cate_alias">
                    <el-input v-model="channelForm.cate_alias" />
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submit">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import type { cateList } from '@/api/channel';
import type { FormInstance, FormRules } from 'element-plus';
import { computed, ref, watch } from 'vue';
const emit = defineEmits<{
    (e: 'submit', data: cateList): void
}>()
const ruleFormRef = ref<FormInstance>()
// 弹出框状态
const dialogVisible = ref(false)
// 单项数据
const channelForm = ref({} as cateList)
const open = async (row: cateList) => {

    dialogVisible.value = true
    isEdit.value = !!row?.id
    // 记录旧值
    oldCateName.value = row.cate_name ?? ''
    oldCateAlias.value = row.cate_alias ?? ''
    channelForm.value = row

}
// 记录
const oldCateName = ref('')
const oldCateAlias = ref('')
// 规则1 
const cate_nameRules = (rule: any, value: any, callback: any) => {
    if (value === oldCateName.value) {
        callback(new Error("新名称不可以与原名称重复哦~"))
    } else {
        callback()
    }
}
// 规则2 
const cate_aliasRules = (rule: any, value: any, callback: any) => {
    if (value === oldCateAlias.value) {
        callback(new Error("新别名不可以与原值重复哦~"))
    } else {
        callback()
    }
}
// 改校验规则 
const isEdit = ref(false)
// 校验规则
const rules = computed<FormRules<cateList>>(() => {
    if (isEdit.value) {
        return {
            cate_name: [
                { required: true, message: '分类名称不能为空', trigger: 'blur' },
                { validator: cate_nameRules, trigger: 'none' }
            ],
            cate_alias: [
                { required: true, message: '分类别名不能为空', trigger: 'blur' },
                { pattern: /^[A-Za-z0-9]{1,15}$/, message: '分类别名必须是 1-15 位字母或数字', trigger: 'blur' },
                { validator: cate_aliasRules, trigger: 'none' }

            ]
        }
    }
    return {
        cate_name: [
            { required: true, message: '分类名称不能为空', trigger: 'blur' }
        ],
        cate_alias: [
            { required: true, message: '分类别名不能为空', trigger: 'blur' },
            { pattern: /^[A-Za-z0-9]{1,15}$/, message: '分类别名必须是 1-15 位字母或数字', trigger: 'blur' }
        ]
    }
})

// 回显
const submit = () => {
    ruleFormRef.value?.validate(async (valid) => {
        if (valid) {
            emit('submit', channelForm.value)
            dialogVisible.value = false
        }
    })
}
defineExpose({ open })
watch(dialogVisible, () => {
    console.log(rules.value);
})
</script>

<style scoped lang="scss"></style>