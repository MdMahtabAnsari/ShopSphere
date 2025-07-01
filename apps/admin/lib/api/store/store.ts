import {api} from "@/lib/api/api";
import {ApiResponseSchema} from "@workspace/api-response/api";
import {CreateStoreSchema,UpdateStoreSchema} from "@workspace/schema/admin/store";
import {AxiosError} from "axios";

export const createStore = async(data: CreateStoreSchema,token:string|null= null):Promise<ApiResponseSchema> => {
    try {
        const response = await api.post("api/admin/stores", data, token?{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }:{});
        return response.data;
    } catch (error) {
        console.error("Error creating store:", error);
        if (error instanceof AxiosError && error.response) {
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
export const getUserStores = async(page: number, limit: number, token: string | null= null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores`,token?
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    page,
                    limit
                }
            }:{
                params: {
                    page,
                    limit
                }
            }
        );
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

export const getStoreById = async(id: string, token: string | null= null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores/${id}`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error fetching store by ID:", error);
        if (error instanceof AxiosError && error.response) {
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

export const isUserHaveStore = async(token: string | null= null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.get(`api/admin/stores/is-user-have-store`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error checking if user has a store:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to check if user has a store",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const getUserAllStores=async(token: string | null= null):Promise<ApiResponseSchema>=>{
    try {
        const response = await api.get(`api/admin/stores/all`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error fetching all user stores:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to fetch all user stores",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const updateStore = async(data: UpdateStoreSchema, token: string | null= null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.put(`api/admin/stores`, data, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error updating store:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to update store",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}

export const deleteStore = async(id: string, token: string | null= null): Promise<ApiResponseSchema> => {
    try {
        const response = await api.delete(`api/admin/stores/${id}`, token ? {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } : {});
        return response.data;
    } catch (error) {
        console.error("Error deleting store:", error);
        if (error instanceof AxiosError && error.response) {
            return error.response.data as ApiResponseSchema;
        }
        return {
            message: "Failed to delete store",
            status: "error",
            isOperational: false,
            data: null,
        };
    }
}