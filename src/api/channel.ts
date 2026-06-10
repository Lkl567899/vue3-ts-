import request from '@/utils/request'
// 获取文章分类
export const GetCateListAPI = () => {
    return request.get<cateList[]>('/my/cate/list')
}
export interface cateList extends cateItem {
    /**id */
    id: number
}
//更新文章分类
export const PutCateItemAPI = (data: cateList) => {
    return request.put('/my/cate/info', data)
}
// 删除文章分类
export const DelCateItemAPI = (id: string | number) => {
    return request.delete('/my/cate/del', {
        params: {
            id
        }
    })
}
// 添加文章分类
export const PostCateItemAPI = (data: cateItem) => {
    return request.post('/my/cate/add', data)
}
type cateItem = {
    /**文章分类别名 */
    cate_alias: string
    /**文章分类名称 */
    cate_name: string
}