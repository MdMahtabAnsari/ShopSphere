import {getStoreById} from "@/lib/api/store/store";

export default async function Page({params}: { params: Promise<{ storeId: string }> }) {
    const {storeId} = await params;
    const response = await getStoreById(storeId);
    if (response.status !== "success") {
        return (
            <div>
                <h1>Error: {response.message}</h1>
                <p>Status: {response.status}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Dashboard for Store ID: {storeId}</h1>
            {
                response.data && (
                response.data)
            }

        </div>
    );
}