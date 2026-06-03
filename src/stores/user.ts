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
    return { token, setToekn, removeToken }
}, {
    persist: true
})