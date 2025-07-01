import { getStoreById } from "@/lib/api/store/store";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ storeId: string }> }) {
    const { getToken } = await auth();
    const token = await getToken()
    const { storeId } = await params;
    const response = await getStoreById(storeId, token);
    if (response.status !== "success") {
        redirect('/dashboard');
    }
    return (
        <div>
            <h1>Dashboard for Store ID: {storeId}</h1>
            {
                response.data && (
                    response.data.name
                )
            }

        </div>
    );
}