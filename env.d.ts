/// <reference types="vite/client" />
// src/auto-imports.d.ts
import 'axios'

// 1. 先定义好你的统一返回结构（名字叫 ApiResponse）
interface ApiResponse<T> {
    code: number
    message: string
    data: T
}

type FlatResponse<T> = {
    code: number
    message: string
} & T

// 2. 声明扩展 axios 模块
declare module 'axios' {
    export interface AxiosInstance {
        // 修正：把刚才写错的 StandardResponse 统一改成你上面定义好的 ApiResponse ！！！
        request<T = any, R = ApiResponse<T> | FlatResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
        get<T = any, R = ApiResponse<T> | FlatResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
        post<T = any, R = ApiResponse<T> | FlatResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
        put<T = any, R = ApiResponse<T> | FlatResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
        delete<T = any, R = ApiResponse<T> | FlatResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    }
}