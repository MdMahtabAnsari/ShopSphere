import {api} from "@/lib/api/api";
import {ApiResponseSchema} from "@workspace/api-response/api";
import {CreateStoreSchema} from "@workspace/schema/admin/store";
import {AxiosError} from "axios";

export const createStore = async(data: CreateStoreSchema):Promise<ApiResponseSchema> => {
    try{
        const response = await api.post("api/admin/store", data);
        return response.data;
    }
    catch (error) {
        console.error("Error creating store:", error);
        if(error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to create store",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}
export const getUserStores = async(page: number, limit: number): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/store`,{
            params: {
                page,
                limit
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user stores:", error);
        if(error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch user stores",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const getStoreById = async(id: string): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/store/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching store by ID:", error);
        if(error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch store by ID",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}