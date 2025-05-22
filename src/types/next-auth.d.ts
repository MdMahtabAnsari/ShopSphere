import { DefaultSession} from "next-auth";


declare module "next-auth" {
    interface User {
        id: string;
        email: string;
        role: "ADMIN" | "USER";
    }
    interface Session {
        user: {
            id: string;
            email: string;
            role: "ADMIN" | "USER";
        } & DefaultSession["user"];
    }
}