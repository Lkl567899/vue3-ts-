import { GetUserInfoAPI, type UserInfoRes } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('big-event-user', () => {

    const token = ref('')
    const setToekn = (newToken: string): void => {
        token.value = newToken
    }
    const removeToken = () => {
        token.value = ''
    }
    // 获取用户信息
    const userInfo = ref<UserInfoRes | null>(null)
    const getUserInfo = async () => {
        const res = await GetUserInfoAPI()
        console.log(res.data);
        userInfo.value = res.data

    }
    return {
        token, setToekn, removeToken,
        userInfo, getUserInfo
    }
}, {
    persist: true
})