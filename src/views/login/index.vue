<template>
    <div class="login_">
        <div class="login_image"></div>
        <div class="login_box">
            <el-form class="login_box_show" :model="ruleForm" ref="ruleFormRef" :rules="loginRules" v-if="isShow">
                <div class="login_box_title">登录</div>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" class="responsive-input" placeholder="请输入用户名"
                        :prefix-icon="Search" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" class="responsive-input" placeholder="请输入密码"
                        :prefix-icon="Search" />
                </el-form-item>
                <div class="login_box_bottom">
                    <el-checkbox v-model="checked1" label="记住我" size="large" />
                    <el-link type="primary" underline="never">忘记密码?</el-link>
                </div>
                <el-form-item>
                    <el-button type="primary" class="submit" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
                <el-link type="info" underline="never" @click="isShow = !isShow">注册 →</el-link>
            </el-form>
            <el-form class="login_box_show" :model="ruleForm" ref="ruleFormRef" :rules="loginRules" v-else="!isShow">
                <div class="login_box_title">注册</div>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" class="responsive-input" placeholder="请输入用户名"
                        :prefix-icon="Search" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" class="responsive-input" placeholder="请输入密码"
                        :prefix-icon="Search" />
                </el-form-item>
                <el-form-item prop="repassword">
                    <el-input v-model="ruleForm.repassword" class="responsive-input" placeholder="请再次输入密码"
                        :prefix-icon="Search" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit" @click="submitForm(ruleFormRef)">注册</el-button>
                </el-form-item>
                <el-link type="info" underline="never" @click="isShow = !isShow">登录 →</el-link>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PostLoginAPI, PostRegAPI } from '@/api/account';
import { useUserStore } from '@/stores';
import { Search } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const useStore = useUserStore()
const router = useRouter()
// 登录|注册切换
const isShow = ref(true)

// 校验
const ruleFormRef = ref<FormInstance>()
// 再次输入密码校验
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.password) {
        callback(new Error('两次输入的密码不一致'))
    } else {
        callback()
    }
}

// 登录or注册校验
const loginRules = reactive<FormRules<typeof ruleForm>>({
    username: [{
        required: true, message: '用户名不能为空', trigger: 'blur'
    }],
    password: [{
        required: true, message: '请输入密码', trigger: 'blur'
    },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位的非空字符', trigger: 'blur' }],
    repassword: [
        {
            validator: validatePass2, trigger: 'blur'
        }
    ]
})
// 账号密码
const ruleForm = reactive({
    username: '',
    password: '',
    repassword: ''
})
// 记住我
const checked1 = ref(false)
// 登录
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            if (isShow.value) {
                try {
                    const res = await PostLoginAPI(ruleForm)
                    // 将Token存入pinia持久化       
                    useStore.setToekn(res.token)
                    ElMessage.success('登录成功')
                    // 跳转到首页
                    router.replace({ name: 'layout' })
                } catch (error) {
                    ElMessage.error(`登录失败`)
                }
            } else {

                try {
                    await PostRegAPI(ruleForm)
                    ElMessage.success(`注册成功~快去登录吧`)
                    isShow.value = true
                } catch (error) {
                    ElMessage.error(`${error}`)
                }
            }
        }
    })
}


// 切换重置
watch(isShow, () => {
    ruleFormRef.value?.resetFields()

})
</script>

<style scoped lang="scss">
.login_ {
    display: flex;
    height: 100%;

    .login_image {
        width: 50%;
        background-image: url('@/assets/images/login.jpg');
        background-size: cover;
        background-position: center;
    }

    &box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .login_box_show {
            .login_box_title {
                font-weight: 600;
                font-size: 24px;
                margin-bottom: 30px;
            }

            .responsive-input {
                width: 400px;

            }

            .login_box_bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .submit {
                width: 100%;
                margin: 10px 0;
            }



        }

    }
}
</style>