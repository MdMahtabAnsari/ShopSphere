import {StoreSettingNavbar} from '@/components/navbar/store-setting-navbar';
import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Store Settings",
    description: "Manage your store settings, including payment methods, shipping options, and more.",
};

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <div className="w-full h-full items-center justify-center">
            <StoreSettingNavbar />
                {children}
            </div>
        </>
    );
}