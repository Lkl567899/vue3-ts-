<template>
    <div class="login_">
        <div class="login_image"></div>
        <div class="login_box">
            <div class="login_box_show">
                <div class="login_box_title">登录</div>
                <el-input v-model="username" class="responsive-input" placeholder="请输入用户名" :prefix-icon="Search" />
                <el-input v-model="password" class="responsive-input" placeholder="请输入密码" :prefix-icon="Search" />
                <div class="login_box_bottom">
                    <el-checkbox v-model="checked1" label="记住我" size="large"  />
                    <el-link type="primary" underline="never">忘记密码?</el-link>
                </div>
                <el-button type="primary" class="submit">登录</el-button>
                   <el-link type="info" underline="never">注册 →</el-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
// 账号密码
const username = ref('')
const password = ref('')
// 记住我
const checked1 = ref(false)
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
                padding: 10px 0;

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