import {StoreNavbar} from '@/components/navbar/store-navbar';
import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Store',
    description: 'Manage your store settings and products.',
};

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <div className="w-full h-full items-center justify-center">
            <StoreNavbar />
                {children}
            </div>
        </>
    );
}