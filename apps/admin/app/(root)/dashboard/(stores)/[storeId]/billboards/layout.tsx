import {ModalProvider} from "@/providers/billboard/modal-provider";
import {getStoreById} from "@/lib/api/store/store";
import {ReactNode} from "react";
import {redirect} from "next/navigation";
import {auth} from '@clerk/nextjs/server'

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ storeId: string }>;
}) {
    const { storeId } = await params;
    const { getToken } = await auth();
    const token = await getToken();
    const response = await getStoreById(storeId, token);
    if(response.status !== "success") {
        redirect('/dashboard');
    }

    return (
        <div className="w-full h-full items-center justify-center">
            <ModalProvider storeId={storeId} />
            {children}
        </div>
    );
}