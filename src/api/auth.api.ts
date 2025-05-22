import { api } from "./api";
import { RegisterSchemaType,LoginSchemaType } from "@/schema/auth.schema";
import { ResponseSchemaType } from "@/schema/api.schema";

export const register = async (data: RegisterSchemaType): Promise<ResponseSchemaType> => {
    try {
        const response = await api.post("/auth/register", data);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export const login = async (data: LoginSchemaType): Promise<ResponseSchemaType> => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}
