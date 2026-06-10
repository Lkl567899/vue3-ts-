import request from '@/utils/request'
// 获取文章分类
export const GetCateListAPI = () => {
    return request.get<cateList[]>('/my/cate/list')
}
export interface cateList {
    /**文章分类别名 */
    cate_alias: string
    /**文章分类名称 */
    cate_name: string
    /**id */
    id: number
}