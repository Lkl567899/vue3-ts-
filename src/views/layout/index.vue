<template>
    <div class="common-layout">
        <el-container class="el-container">
            <el-aside width="200px">
                <div class="logo">事件管理</div>
                <el-menu active-text-color="#ffd04b" background-color="#232323" text-color="#fff"
                    :default-active="'/article/channel'" router>
                    <el-menu-item index="/article/channel">
                        <el-icon>
                            <Management />
                        </el-icon>
                        <span>文章分类</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div>管理者: <span class="myName">夜神月</span> </div>
                    <el-dropdown placement="bottom-end" @command="onCommand">
                        <div class="edit_right">
                            <div class="user_image"></div>
                            <el-icon>
                                <ArrowDown />
                            </el-icon>
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="profile">基本资料</el-dropdown-item>
                                <el-dropdown-item command="avatar">更换头像</el-dropdown-item>
                                <el-dropdown-item command="password" >重置密码</el-dropdown-item>
                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>你所热爱的就是你的生活</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown, Management } from '@element-plus/icons-vue';
// 下来菜单事件
const onCommand = (command:any) => {
    console.log(command);
}
</script>

<style scoped lang="scss">
.el-container {
    height: 100vh;

    .el-aside {
        background-color: #232323;

        .logo {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 20px;
            color: white;

        }
    }

    .el-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .myName {
            font-weight: 700;
        }

        .edit_right {

            display: flex;
            align-items: center;

            .el-icon {
                margin-left: 10px;
                color: #999;
            }
            .user_image {
                background-color: red;
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
        }
    }

    .el-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #666;
    }
}
</style>