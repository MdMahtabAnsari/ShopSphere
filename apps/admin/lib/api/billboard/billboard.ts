import {api} from "@/lib/api/api";
import {ApiResponseSchema} from "@workspace/api-response/api";
import {CreateBillboardSchema} from "@workspace/schema/admin/billboard";
import {AxiosError} from "axios";

export const createBillboard = async(data: CreateBillboardSchema, token: string | null = null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.post(`api/admin/stores/${data.storeId}/billboards`, data, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error creating billboard:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to create billboard",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const getBillboards = async(storeId:string,page:number,limit:number,token:string|null=null): Promise<ApiResponseSchema> => {
    console.log("storeId", storeId, "page", page, "limit", limit, "token", token);
    try {
        const response = await api.get(`api/admin/stores/${storeId}/billboards`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                page,
                limit
            }
        } : {
            params: {
                page,
                limit
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching billboards:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch billboards",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const getAllBillboards = async(storeId:string,token:string|null=null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores/${storeId}/billboards/all`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error fetching all billboards:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch all billboards",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const getBillboardById = async(storeId:string,billboardId:string,token:string|null=null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores/${storeId}/billboards/${billboardId}`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error fetching billboard by ID:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch billboard by ID",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const isStoreHaveBillboard = async(storeId:string,token:string|null=null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores/${storeId}/billboards/is-store-have-billboard`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error checking if store has billboard:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to check if store has billboard",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}