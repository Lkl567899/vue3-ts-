
import request from '@/utils/request'
import type { FlatResponse } from '../../env'
// 注册
export const PostRegAPI = (data: Reg) => {
    return request.post('/api/reg', data)
}
export type Reg = {
    username: string // 用户名
    password: string // 密码
    repassword?: string // 确认密码
}
// 登录

export const PostLoginAPI = (data: Reg) => {
    return request.post<any, FlatResponse<LoginData>>('/api/login', data)
}
interface LoginData {
    token: string
}