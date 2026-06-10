import request from '@/utils/request'
// 获取用户信息
export const GetUserInfoAPI = () => {
    return request.get<UserInfoRes>('/my/userinfo')
}
// 1. 定义用户信息的数据结构
export interface UserInfoRes {
    /**id */
    id: number
    /**用户名 */
    username: string
    /**昵称 */
    nickname: string
    /**邮箱*/
    email: string
    /**头像 */
    user_pic: string | null
}